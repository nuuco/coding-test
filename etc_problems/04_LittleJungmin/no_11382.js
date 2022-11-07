const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(' ').map(el => Number(el));

console.log(a + b + c);