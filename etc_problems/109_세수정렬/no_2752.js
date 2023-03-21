const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const arr = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

arr.sort((a, b) => a - b);

console.log(arr.join(' '));