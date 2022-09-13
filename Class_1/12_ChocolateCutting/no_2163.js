const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, m] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log((n - 1) + (n * (m - 1)));
