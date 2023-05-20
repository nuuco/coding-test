const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [sum, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let last = sum;

for(let el of input) {
  last -= el;
}

console.log(last);



