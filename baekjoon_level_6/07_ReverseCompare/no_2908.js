const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const n1 = Number(input[0][2] + input[0][1] + input[0][0]);
const n2 = Number(input[1][2] + input[1][1] + input[1][0]);
const result = n1 > n2 ? n1 : n2;
console.log(result);