const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

/**
 * s 와 arr 요소간 차이(절대값)만 저장한 배열을 만든다. 요소들의 최대공약수를 구한다.
 */

const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

const abs = arr.map(el => Math.abs(s - el));

const answer = abs.reduce((acc, cur) => gcd(acc, cur));

console.log(answer);

