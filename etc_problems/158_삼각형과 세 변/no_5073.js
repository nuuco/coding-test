const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

const result = [];
for(let el of input) {
  const sides = el.split(' ').map(Number);

  //유효성 검사
  sides.sort((a, b) => a - b);
  if(sides[0] + sides[1] <= sides[2]) {
    result.push('Invalid');
    continue;
  }

  //삼각형이 맞을 경우
  const set = new Set(sides);
  if(set.size === 1) {
    result.push('Equilateral');
  } else if(set.size === 2) {
    result.push('Isosceles');
  } else {
    result.push('Scalene');
  }
}

console.log(result.join('\n'));