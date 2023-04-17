const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = (binStr) => {
  const result = [];
  for(let i = 0; i < binStr.length; i++) {
    if(binStr[binStr.length - 1 - i] === '1') {
      result.push(i);
    }
  }

  return result.join(' ');
}

const result = [];
for(let el of input) {
  const answer = solution(el.toString(2));
  result.push(answer);
}
console.log(result.join('\n'));
