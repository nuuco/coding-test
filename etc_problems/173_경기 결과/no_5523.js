const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let a = 0;
let b = 0;

for(let score of input) {
  const [aScore, bScore] = score.split(' ').map(Number);
  if(aScore > bScore) {
    a++;
  } else if(aScore < bScore) {
    b++;
  }
}

console.log(`${a} ${b}`);
