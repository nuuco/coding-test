const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number).sort((a, b) => a - b);

const diff = c - b < b - a ? c - b : b - a;

if(a + diff !== b) {
  console.log(a + diff);
} else if (b + diff !== c) {
  console.log(b + diff);
} else {
  console.log(c + diff);
}

