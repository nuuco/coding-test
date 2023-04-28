const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let el of input) {
  const answer = el[0].toUpperCase() + el.slice(1);
  result.push(answer);
}

console.log(result.join('\n'));
