const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const diff = input.reduce((acc, cur) => acc + cur, 0) - 100;
let result;
for(let i = 0; i < input.length - 1; i++) {
  for(let j = i + 1; j < input.length; j++) {
    if(input[i] + input[j] === diff) {
      result = input.filter((el, idx) => idx !== i && idx !== j)
      break;
    }
  }
}

console.log(result.join('\n'));

