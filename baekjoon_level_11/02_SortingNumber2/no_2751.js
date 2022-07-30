const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(el => Number(el));

arr.sort((a, b) => a - b)
console.log(arr.join('\n'));