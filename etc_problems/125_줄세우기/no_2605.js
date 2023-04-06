const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, input] = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.split(' ').map(Number);
arr[0] = 1;

for(let i = 1; i < arr.length; i++) {
  const num = i + 1; //자기 순서 번호
  const jumpToNum = i - arr[i];

  arr.splice(i, 1);
  arr.splice(jumpToNum, 0, num);
}

console.log(arr.join(' '));