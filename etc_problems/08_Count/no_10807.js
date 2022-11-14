const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, input, v] = fs.readFileSync(filePath).toString().trim().split('\n');
const numArr = input.split(' ').map(el => Number(el));
const target = Number(v);

const result = numArr.filter(el => el === target).length;

console.log(result);

