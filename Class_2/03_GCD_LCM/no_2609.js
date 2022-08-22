const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, m] = fs.readFileSync(filePath).toString().trim().split(' ').map(el => Number(el));

//유클리드 호제법을 사용한 최대공약수와 최소공배수 구하기
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

const GCD = gcd(n, m);
const LCM = n * m / GCD;

console.log(GCD + "\n" + LCM);