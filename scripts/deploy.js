'use strict';

const chalk = require('chalk');
const { execSync } = require('child_process');
const globby = require('globby');
const rimraf = require('rimraf');

/*
* Runs a command in a new shell in the repo's root directory
* @param {String} command - Which command to run
* @return {String} - The standard output
*/
const shell = command => {
  return execSync(command).toString('utf8');
}

const initialSetup = () => {
  shell('npm run build');
  shell('git stash save before_deploy');
}

/*
* @param {String} branch - Which branch to check
* @return {String} - The arg to use if the branch doesn't exist
*/
const getBranchCheckoutOptions = branch => {
  return shell('git branch')
         .split('\n')
         .map(s => s.trim())
         .indexOf(branch)
         === -1 ? "--orphan" : ""
}

/*
* Git checkouts a branch
* @param {String} branch - The branch to checkout
*/
const checkoutBranch = branch => {
  shell(`git checkout ${getBranchCheckoutOptions(branch)} ${branch}`);
  console.log("1")
}

// Remove files/folders that are not needed for production
const removeDevFiles = () => {
  const filesToKeep = ['.', '..', 'build', '.git', '.gitignore', 'node_modules'];
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
  shell('git add --a');
  // shell('git commit -m "auto-deploy"');
  // shell('git push --set-upstream origin master');
}

const resetEnvironment = () => {
  checkoutBranch('deploy');
  shell('git reset --hard');
}

initialSetup();
checkoutBranch('master');
removeDevFiles();
moveFolderToRoot('build');
deploy();
resetEnvironment();
