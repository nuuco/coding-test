const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const arr = input.split('').map(el => Number(el));
arr.sort((a, b) => b - a);

console.log(arr.join(''));
