// Copyright (c) 2020-2026 grommunio GmbH. All Rights Reserved.
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

package oauthkeycloak

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

type KeycloakProvider struct {
}

type KeycloakUser struct {
	Id       int64  `json:"id"`
	Sub      string `json:"sub"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Name     string `json:"name"`
}

func init() {
	provider := &KeycloakProvider{}
	einterfaces.RegisterOAuthProvider(model.UserAuthServiceKeycloak, provider)
}

func userFromKeycloakUser(logger mlog.LoggerIFace, glu *KeycloakUser) *model.User {
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
	user.AuthService = model.UserAuthServiceKeycloak

	return user
}

func keycloakUserFromJSON(logger mlog.LoggerIFace, data io.Reader) (*KeycloakUser, error) {
	decoder := json.NewDecoder(data)
	var glu KeycloakUser
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

func (glu *KeycloakUser) IsValid() error {
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

func (glu *KeycloakUser) getAuthData() string {
	return strconv.FormatInt(glu.Id, 10)
}

func (gp *KeycloakProvider) GetUserFromJSON(c request.CTX, data io.Reader, tokenUser *model.User) (*model.User, error) {
	glu, err := keycloakUserFromJSON(c.Logger(), data)
	if err != nil {
		return nil, err
	}
	if err = glu.IsValid(); err != nil {
		return nil, err
	}

	return userFromKeycloakUser(c.Logger(), glu), nil
}

func (gp *KeycloakProvider) GetSSOSettings(_ request.CTX, config *model.Config, service string) (*model.SSOSettings, error) {
	return &config.KeycloakSettings, nil
}

func (gp *KeycloakProvider) GetUserFromIdToken(_ request.CTX, idToken string) (*model.User, error) {
	return nil, nil
}

func (gp *KeycloakProvider) IsSameUser(_ request.CTX, dbUser, oauthUser *model.User) bool {
	return dbUser.AuthData == oauthUser.AuthData || (dbUser.AuthService == "pam" && oauthUser.AuthService == "keycloak" && (dbUser.AuthData == nil || *dbUser.AuthData == "") && dbUser.Email == oauthUser.Email)
}
