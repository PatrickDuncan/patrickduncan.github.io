'use strict';

const chalk = require('chalk');
const { execSync } = require('child_process');
const rimraf = require('rimraf');

/*
* Runs a command in a new shell in the repo's root directory.
*
* @param {String} command
* @return {String} the standard output
*/
const shell = command => {
  return execSync(command).toString('utf8');
}

const showMessage = message => {
  console.log(chalk.yellowBright.bold(message));
}

const initialSetup = () => {
  showMessage("Deploying...");
  shell('npm run build');
  shell('git stash save before_deploy');
}

/*
* @param {String} branch
* @return {String} the arg to use if the branch doesn't exist
*/
const getBranchCheckoutOptions = branch => {
  return shell('git branch')
         .split('\n')
         .map(s => s.trim())
         .indexOf(branch)
         === -1 ? "--orphan" : ""
}

/*
* Git checkout a branch
*
* @param {String} branch - The branch to checkout
*/
const checkoutBranch = branch => {
  shell(`git checkout ${getBranchCheckoutOptions(branch)} ${branch}`);
}

// Remove files/folders that are not needed for production
const removeDevFiles = () => {
  const filesToKeep = ['', '.', '..', '.git', '.gitignore',
                       'build', 'node_modules'];
  shell('ls -a')
  .split('\n')
  .filter(f => filesToKeep.indexOf(f) == -1)
  .forEach(f => {
    rimraf.sync(f);
  });
}

const moveFolderToRoot = folder => {
  shell(`mv ${folder}/* .`);
  rimraf.sync(folder);
}

const deploy = () => {
  shell('echo "patrickduncan.co" >> CNAME');
  shell('git add --a');
  shell('git commit -m "auto-deploy"');
  shell('git push --set-upstream origin master');
}

const resetEnvironment = () => {
  checkoutBranch('deploy');
  shell('git reset --hard');
}

initialSetup();
checkoutBranch('master');
removeDevFiles();
moveFolderToRoot('build');

let nothingToDeploy = false;
try {
  deploy();
}
catch(err) {
  nothingToDeploy = true
  showMessage("Nothing to deploy");
}
finally {
  resetEnvironment();
  if (nothingToDeploy) showMessage("Deployed successfully");
}
