const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "eoghan523";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});

