# GitHub-Repo-Tracker

#### A simple GitHub Repo Tracker written with HTML/CSS/JS/React that makes use of  [GitHub API](https://developer.github.com/v3/repos/#list-repositories-for-a-user) (does not require authentication).

Created by [Polina Moore](https://github.com/Poligera) and [Shav Vimalendiran](https://github.com/Shavvimal).


### Deployment:
https://github-repo-tracker.netlify.app/


### Functionality:

- Repo tracker displays input for users to give their GitHub username
- After submitting their username, GitHub API retrieves that user's list of repos
- When selecting a repo, a User is shown some data about that repo, as as its name with URL, main language, forks, watchers and open issues.


### Installation & Usage

- Clone or download the repo.
- Open terminal and cd into  `GitHub-Repo-Tracker` folder.
- Run **npm install** to get Node Modules, wait for them to be installed.
- Run **npm run dev** to start the app in the browser
- Upon getting "webpack 5.35.0 compiled successfully" in the terminal, you will see a browser page open at http://localhost:8080/


### Future improvements

- Add more logic to filter out a wrong username vs GH users with no public repositories
- Add media queries