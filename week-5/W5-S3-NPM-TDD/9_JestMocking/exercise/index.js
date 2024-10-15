const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "ENTER_YOUR_GITHUB_USERNAME_HERE";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});
