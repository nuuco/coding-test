const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].split(' ').map(Number);
}

const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const result = [];
for(let el of arr) {
  let gcdSum = 0;
  for(let i = 1; i < el.length; i++) {
    for(let j = i + 1; j < el.length; j++) {
      gcdSum += gcd(el[i], el[j]);
    }
  }
  result.push(gcdSum);
}

console.log(result.join('\n'));