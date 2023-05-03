const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

const result = [];

for(let el of input){
  const [a, b] = el.split(' ').map(Number);
  if(b % a === 0) {
    result.push('factor');
  } else if (a % b === 0) {
    result.push('multiple');
  } else {
    result.push('neither');
  }
}

console.log(result.join('\n'));