const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [a, b] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log((a + b)*(a - b));
