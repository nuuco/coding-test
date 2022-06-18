const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, numStr] = input;
const arr = numStr.split(' ');

console.log(Math.min(...arr) + ' ' + Math.max(...arr));