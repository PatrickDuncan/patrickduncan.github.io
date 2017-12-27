'use strict';

const chalk = require('chalk');
const { exec } = require('child_process');
const rimraf = require('rimraf');

// Takes in a shell command and executes it as you would expect
const SHELL = command => {
  return execSync(command).toString('utf8');
}

const get_master_checkout_options = () => {
  return SHELL('git branch')
         .split('\n')
         .map(s => s.trim())
         .indexOf('master')
         === -1 ? "-b" : ""
}
