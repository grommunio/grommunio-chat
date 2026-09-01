// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package oauthgitlab

import (
	"encoding/json"
	"errors"
	"io"
	"strconv"
	"strings"

	"github.com/mattermost/mattermost/server/public/model"
	"github.com/mattermost/mattermost/server/public/shared/mlog"
	"github.com/mattermost/mattermost/server/public/shared/request"
	"github.com/mattermost/mattermost/server/v8/einterfaces"
)

type GitLabProvider struct {
}

type GitLabUser struct {
	Id       int64  `json:"id"`
	Sub      string `json:"sub"`
	Username string `json:"username"`
	Login    string `json:"login"`
	Email    string `json:"email"`
	Name     string `json:"name"`
}

func init() {
	provider := &GitLabProvider{}
	einterfaces.RegisterOAuthProvider(model.UserAuthServiceGitlab, provider)
}

func userFromGitLabUser(logger mlog.LoggerIFace, glu *GitLabUser) *model.User {
	user := &model.User{}
	user.Username = model.CleanUsername(logger, glu.Username)
	splitName := strings.Split(glu.Name, " ")
	if len(splitName) == 2 {
		user.FirstName = splitName[0]
		user.LastName = splitName[1]
	} else if len(splitName) >= 2 {
		user.FirstName = splitName[0]
		user.LastName = strings.Join(splitName[1:], " ")
	} else {
		user.FirstName = glu.Name
	}
	user.Email = glu.Email
	user.Email = strings.ToLower(user.Email)
	userId := glu.getAuthData()
	user.AuthData = &userId
	user.AuthService = model.UserAuthServiceGitlab

	return user
}

func gitLabUserFromJSON(logger mlog.LoggerIFace, data io.Reader) (*GitLabUser, error) {
	decoder := json.NewDecoder(data)
	var glu GitLabUser
	err := decoder.Decode(&glu)
	if err != nil {
		return nil, err
	}

	logger.Debug(
		"Converted JSON data to Keycloak user",
		mlog.Int("Id", glu.Id),
		mlog.String("Sub", glu.Sub),
		mlog.String("Username", glu.Username),
		mlog.String("Email", glu.Email),
		mlog.String("Name", glu.Name),
	)

	if glu.Id == 0 {
		idx := strings.LastIndex(glu.Sub, ":")
		if idx != -1 {
			last := glu.Sub[idx+1:]
			i, err := strconv.ParseInt(last, 10, 64)
			if err == nil {
				glu.Id = i
			}
		}
	}

	if glu.Username == "" {
		glu.Username = strings.Replace(glu.Email, "@", "_", -1)
	}

	return &glu, nil
}

func (glu *GitLabUser) IsValid() error {
	if glu.Id == 0 {
		return errors.New("user id can't be 0")
	}

	if glu.Username == "" {
		return errors.New("Username should not be empty")
	}

	if glu.Email == "" {
		return errors.New("user e-mail should not be empty")
	}

	return nil
}

func (glu *GitLabUser) getAuthData() string {
	return strconv.FormatInt(glu.Id, 10)
}

func (gp *GitLabProvider) GetUserFromJSON(c request.CTX, data io.Reader, tokenUser *model.User) (*model.User, error) {
	glu, err := gitLabUserFromJSON(c.Logger(), data)
	if err != nil {
		return nil, err
	}
	if err = glu.IsValid(); err != nil {
		return nil, err
	}

	return userFromGitLabUser(c.Logger(), glu), nil
}

func (gp *GitLabProvider) GetSSOSettings(_ request.CTX, config *model.Config, service string) (*model.SSOSettings, error) {
	return &config.GitLabSettings, nil
}

func (gp *GitLabProvider) GetUserFromIdToken(_ request.CTX, idToken string) (*model.User, error) {
	return nil, nil
}

func (gp *GitLabProvider) IsSameUser(c request.CTX, dbUser, oauthUser *model.User) bool {
	c.Logger().Debug(
		"gitlab.IsSameUser",
		mlog.String("dbUser.AuthData", *dbUser.AuthData),
		mlog.String("oautUser.AuthData", *oauthUser.AuthData),
		mlog.String("dbUser.AuthService", dbUser.AuthService),
		mlog.String("oauthUser.AuthService", oauthUser.AuthService),
	)
	return (*dbUser.AuthData == *oauthUser.AuthData && (dbUser.AuthService == "gitlab" || dbUser.AuthService == "keycloak")) || (dbUser.AuthService == "pam" && oauthUser.AuthService == "gitlab" && (dbUser.AuthData == nil || *dbUser.AuthData == "") && dbUser.Email == oauthUser.Email)
}
