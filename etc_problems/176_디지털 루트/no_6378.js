const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

const result = [];

for(let el of input) {
  let elArr = el.split('').map(Number);
  while(elArr.length > 1) {
    const sum = elArr.reduce((acc, cur) => acc + cur, 0);
    elArr = String(sum).split('').map(Number);
  }
  
  result.push(elArr[0]);
}

console.log(result.join('\n'));