const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const arr = fs.readFileSync(filePath).toString().trim().split(' ').map(el => Number(el)**2);

const result = arr.reduce((acc, cur) =>  acc + cur, 0) % 10;
console.log(result);