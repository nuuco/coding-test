const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

let c = 100;
let s = 100;

for(let el of input) {
  const [cScore, sScore] = el.split(' ').map(Number);
  if(cScore < sScore) {
    c -= sScore;
  }else if(cScore > sScore) {
    s -= cScore;
  }
}

console.log(c);
console.log(s);