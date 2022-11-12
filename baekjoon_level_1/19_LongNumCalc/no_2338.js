const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b] = fs.readFileSync(filePath).toString().trim().split('\n').map(BigInt);

console.log(`${String(a + b)}\n${String(a - b)}\n${String(a * b)}`);