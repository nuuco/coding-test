const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s+/);

const max = Math.max(...arr);
const sum = arr.map(el => parseInt(el) / max * 100).reduce((acc, cur) => acc + cur);

console.log(sum / parseInt(n));