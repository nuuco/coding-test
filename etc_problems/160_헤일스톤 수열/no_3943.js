const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const result = [];
for(let el of input) {
  let num = el;
  let max = el;
  while(num !== 1) {
    if(num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }

    if(max < num) {
      max = num;
    }
  }
  result.push(max);
}

console.log(result.join('\n'));