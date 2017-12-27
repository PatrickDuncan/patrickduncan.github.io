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
}

// Remove files/folders that are not needed for production
const removeDevFiles = () => {
  const GLOBBY_OPT = {nodir: false, dot: true}
  globby(['*', '!build', '!.git*', '!node_modules'], GLOBBY_OPT)
  .then(paths => {
    paths.forEach(path => {
      rimraf(path, {}, () => {});
    });
  });
}

const moveFolderToRoot = folder => {
  shell(`mv ${folder}/* .`);
  rimraf(folder, {}, () => {});
}

const deploy = () => {
  shell("git add --a");
}

const resetEnvironment = () => {
  checkoutBranch('deploy');
}

initialSetup();
checkoutBranch('master');
removeDevFiles();
moveFolderToRoot('build');
deploy();
resetEnvironment();
