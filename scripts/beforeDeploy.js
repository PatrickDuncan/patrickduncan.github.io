'use strict';

const { execSync } = require('child_process');

/*
* @param {String} command
* @return {String} the standard output
*/
const shell = command => {
  return execSync(command).toString('utf8');
}

// @return {Array} the directory contents (space trimmed)
const getDirectoryContents = () => {
  return shell('ls').split("\n").map(s => s.trim())
}

if (getDirectoryContents().indexOf('build') > -1) {
  shell('echo "patrickduncan.co" >> CNAME');
  shell('mv CNAME build');
}
