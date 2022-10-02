const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

//유클리드 호제법을 사용한 최대공약수와 최소공배수 구하기
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);

const result = [];

for(let el of arr) {
  const [n, m] = el.split(' ').map(Number);
  result.push(lcm(n, m));
}

console.log(result.join('\n'));