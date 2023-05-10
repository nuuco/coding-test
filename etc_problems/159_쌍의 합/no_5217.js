const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const findPairs = (num) => {
  const pairs = [];
  for(let i = 1; i < num / 2; i++) {
    pairs.push(i + ' ' + (num - i));
  }
  return pairs
}

const result = [];

for(let el of input) {
  let answer = 'Pairs for ' + el + ': ';
  answer += findPairs(el).join(', ');

  result.push(answer);
}

console.log(result.join('\n'));
