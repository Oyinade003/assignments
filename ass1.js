const path = require('path');
const process = require('process');
const os = require('os');

//Print out the current working directory
const cwd = path.resolve();
console.log('cwd');

//Print out the separator for a given file path
const separator = path.sep();
console.log('separator');

//Print out the extension name of a file path
const extName = path.extname('C:\Users\okiki\Downloads\Week2\assignment.js');
console.log('extName');

//Print out the process idd of the current running process
const proId = oss.getpid();
console.log('proId');

//Print out the user informatio of the os
const User = os.userInfo();
console.log('User');

//Print out the platform of an operating system
const platform = os.platform();
console.log('platform');