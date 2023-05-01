const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b] = fs.readFileSync(filePath).toString().trim().split(' ');
//string.replace() 은 원래 string을 수정하지 않음!

let minA = Number(a.replaceAll('6', '5'));
let maxA = Number(a.replaceAll('5', '6'));
let minB = Number(b.replaceAll('6', '5'));
let maxB = Number(b.replaceAll('5', '6'));

let min = minA + minB;
let max = maxA + maxB;

console.log(min + ' ' + max);

