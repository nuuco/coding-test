const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

input.sort((a, b) => a - b);

const sum = input.reduce((acc, cur) => acc + cur, 0);

console.log(sum / input.length);
console.log(input[2]);
