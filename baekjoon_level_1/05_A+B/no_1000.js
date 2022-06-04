const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a + b);