const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, numStr] = fs.readFileSync(filePath).toString().trim().split('\n');
const numArr = numStr.split('');
const sum = numArr.reduce((acc, cur) => acc + Number(cur), 0)

console.log(sum);