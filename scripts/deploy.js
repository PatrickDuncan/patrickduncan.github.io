'use strict';

const chalk = require('chalk');
const { exec } = require('child_process');
const rimraf = require('rimraf');

// Takes in a shell command and executes it as you would expect
const SHELL = command => {
  return execSync(command).toString('utf8');
}
