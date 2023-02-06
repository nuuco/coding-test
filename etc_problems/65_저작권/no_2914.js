const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, i] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const m = a * (i - 1) + 1;

console.log(m);