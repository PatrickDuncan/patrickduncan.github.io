'use strict';

const chalk = require('chalk');
const { execSync } = require('child_process');
const rimraf = require('rimraf');

/*
* @param {String} command
* @return {String} the standard output
*/
const shell = command => {
  return execSync(command).toString('utf8');
}

// Print a yellow message to terminal
const log = message => {
  console.log(chalk.yellowBright.bold(message));
}

// Build the website and clean up the working copy
const initialSetup = () => {
  log("Deploying...");
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
         === -1 ? "--orphan" : "";
}

// @param {String} branch the branch to checkout
const checkoutBranch = branch => {
  shell(`git checkout ${getBranchCheckoutOptions(branch)} ${branch}`);
}

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

/* Move a folder's contents to the root and then delete the folder
* @param {String} folder the folder to recursively move to the root
*/
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

let deployedSuccessfully = true;
try {
  deploy();
}
catch(err) {
  deployedSuccessfully = false;
  log("Nothing to deploy");
}
finally {
  resetEnvironment();
  if (deployedSuccessfully) log("Deployed successfully");
}
