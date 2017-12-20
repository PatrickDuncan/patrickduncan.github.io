'use strict';

const chalk = require('chalk');
const { exec } = require('child_process');
const rimraf = require('rimraf');

// Takes in a shell command and executes it as you would expect
const SHELL = command => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(chalk.red(`${error}`));
      return;
    }
    return stdout;
  });
}
