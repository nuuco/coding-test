const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

let [a, b] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
a--;
b--;

const shareA = Math.floor(a / 4);
const shareB = Math.floor(b / 4);
const restA = a % 4;
const restB = b % 4;

const shareDiff = Math.abs(shareA - shareB);
const restDiff = Math.abs(restA - restB);
const result = shareDiff + restDiff
console.log(result);