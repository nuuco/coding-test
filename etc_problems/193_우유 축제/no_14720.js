const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, input] = fs.readFileSync(filePath).toString().trim().split('\n');

const stores = input.split(' ').map(Number);

let count = 0;

const milks = 0;
let cur = 0;

for(let el of stores) {
  if(el === cur) {
    count++;
    cur++;
  }

  if(cur === 3) {
    cur = 0;
  }
}

console.log(count);