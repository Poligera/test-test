# GitHub-Repo-Tracker

#### A simple GitHub Repo Tracker written with HTML/CSS/JS/React that makes use of  [GitHub API](https://developer.github.com/v3/repos/#list-repositories-for-a-user) (does not reuire authentication).

### Deployment:
https://github-repo-tracker.netlify.app/


### Functionality:

- Repo tracker displays input for users to give their GitHub username
- After submitting their username, GitHub API retrieves that user's list of repos
- When selecting a repo, a User is shown some data about that repo eg. main language, stargazers, forks etc.


### Installation & Usage

- Clone or download the repo.
- Open terminal and navigate to the repo folder.
- Run **npm install** to get Node Modules, wait for them to be installed.
- Run **npm run dev** to start the app in the browser
- Upon getting "webpack 5.35.0 compiled successfully" in the terminal, you will see a browser page open at http://localhost:8080/


### Known bugs

- At the moment we cannot fetch a valid user after an invalid user, unless the browser is refreshed (logical error somewhere)

### Future improvements

- Add more logic to filter out a wrong username vs GH users with no public repositories
- Add media queries