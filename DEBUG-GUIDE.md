# Mattermost to grommunio-chat server transformation guide

## Transformation procedure

### Check if you missed some 'Mattermost'-occurrences

- after commit `Adjusted server/i18n files (4/5): general 'mattermost'`
  - inc: `server/i18n/*.json` | `^( *"translation": .*)mattermost` | regex
  - inc: `server/i18n/*.json` | `^( *"translation": .*)mattermost\.com` | regex
- after commit `Adjusted webapp/i18n files (5/5): general 'mattermost'`
  - inc: `webapp/channels/src/i18n/*.json` | `^(  ".+": .*)mattermost` | regex
  - inc: `webapp/channels/src/i18n/*.json` | `^(  ".+": .*)mattermost\.com` | regex
- after commit `Exchanged default texts (3/3): general 'mattermost'`
  - exc: `.test.tsx,.snap` | `^( *defaultMessage=.*)mattermost` | regex
  - exc: `.test.tsx,.snap` | `^( *defaultMessage=.*)mattermost\.com` | regex

### Rebase conflicts with regex-commit

- use *ours*: `git checkout --ours -- <path>`
- execute regex again
- `git add -A`
- `git rebase --continue`


### Regex commits for next time

(got no results)
> Exchanged default texts (3/4): github urls
> 
> exclude: .test.tsx,.snap
> 
> ^( *defaultMessage=.*)github\.com\/mattermost\/mattermost-server([\/\.#][a-z\-0-9]+)*(\/)? | regex, several times<br>
> $1github.com/grommunio/grommunio-chat
> 
> ^( *defaultMessage=.*)github\.com\/mattermost\/desktop([\/\.#][a-z\-0-9]+)*(\/)? | regex, several times<br>
> $1github.com/grommunio/grommunio-desktop
> 
> ^( *defaultMessage=.*)github\.com\/mattermost\/mattermost-mobile([\/\.#][a-z\-0-9]+)*(\/)? | regex, several times<br>
> $1github.com/grommunio/grommunio-chat-mobile


## Install the app



## Run the app


## Build the app

- via *Jenkins* and *OBS*


## Debug

### Problems


### Errors

