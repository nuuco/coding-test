const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let peopleNum = 0;
let max = 0;
for(let el of input){
  const [outNum, inNum] = el.split(' ').map(Number);
  peopleNum = peopleNum - outNum + inNum;
  if(peopleNum > max) {
    max = peopleNum;
  }
}

console.log(max);