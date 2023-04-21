const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let rest = a + b;
let count = 0;

while(rest >= c) {
  const tmp = Math.floor(rest / c);
  count += tmp;
  rest = rest % c + tmp;
}

console.log(count);