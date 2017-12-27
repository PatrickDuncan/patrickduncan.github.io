'use strict';

const chalk = require('chalk');
const { exec } = require('child_process');
const rimraf = require('rimraf');

/*
* Runs a command in a new shell in the repo's root directory
* @param {String} command - Which command to run
* @return {String} - The standard output
*/
const SHELL = command => {
  return execSync(command).toString('utf8');
}

/*
* @param {String} branch - Which branch to check
* @return {String} - -b if the branch doesn't exist
*/
const get_master_checkout_options = branch => {
  return SHELL('git branch')
         .split('\n')
         .map(s => s.trim())
         .indexOf(branch)
         === -1 ? "-b" : ""
}

/*
* Git checkouts a branch
* @param {String} branch - The branch to checkout
*/
const checkout_branch = branch => {
  SHELL(`git checkout ${get_master_checkout_options(branch)} ${branch}`);
}
