const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n').reverse();

const result = [];
input.pop();

while(input.length > 0) {
  let answer = Number(input.pop());
  const count = Number(input.pop());
  for(let i = 0; i < count; i++) {
    const [num, cost] = input.pop().split(' ').map(Number);
    answer += num * cost;
  }
  result.push(answer);
}

console.log(result.join('\n'));
