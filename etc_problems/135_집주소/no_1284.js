const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (numStr) => {
  let count = numStr.length + 1;
  for(let char of numStr) {
    switch(char) {
      case '0':
        count += 4;
        break;
      case '1':
        count += 2;
        break;
      default:
        count += 3;
        break;
    }
  }

  return count;
}

const result = [];
for(let i = 0; i < input.length - 1; i++) {
  result.push(solution(input[i]));
}

console.log(result.join('\n'));