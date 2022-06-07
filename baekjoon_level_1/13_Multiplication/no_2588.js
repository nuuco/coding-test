const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);
const num3 = num1 * parseInt(input[1][2]);
const num4 = num1 * parseInt(input[1][1]);
const num5 = num1 * parseInt(input[1][0]);
const num6 = num1 * num2;

console.log(num3 + '\n' + num4 + '\n' + num5 + '\n' + num6);