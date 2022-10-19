const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, t] = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = t.split(' ').map(Number).sort((a, b) => a - b);

//유클리드 호제법을 사용한 최대공약수와 최소공배수 구하기
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);

const LCM = arr.reduce((acc, cur) => {
  const LCM = lcm(acc, cur);
  return LCM;
}, 1);

// 입력이 2 4 8 인경우 답은 16
// 출력이 3 6 
//-> 최소공배수가 배열 내에 있다면, 배열의 가장 작은 수와 곱해준다.
if(arr.includes(LCM)) {
  console.log(LCM * arr[0]);
} else {
  console.log(LCM);
}
