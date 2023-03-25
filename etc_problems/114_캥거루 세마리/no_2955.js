const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const[a, b, c] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const result = Math.max(b - a - 1, c - b - 1);

console.log(result);