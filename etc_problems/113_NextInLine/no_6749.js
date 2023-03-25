const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const[a, b] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const diff = b - a;
const result = b + diff;

console.log(result);
