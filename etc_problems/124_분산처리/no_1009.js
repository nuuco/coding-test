const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let el of arr){
  const [a, b] = el.split(' ').map(Number);
  let oneNum = a % 10;

  for(let i = 1; i < b; i++) {
    let tmp = oneNum * a;
    oneNum = tmp % 10;
  }

  if(oneNum === 0) {
    oneNum = 10;
  }
  result.push(oneNum);
}

console.log(result.join('\n'));