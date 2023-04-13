const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = Number(fs.readFileSync(filePath).toString().trim());

let rest = 1000 - input;
let count = 0;

const coins = [500, 100, 50, 10, 5, 1];

for(let el of coins) {
  count += Math.floor(rest / el);
  rest = rest % el;
}

console.log(count);