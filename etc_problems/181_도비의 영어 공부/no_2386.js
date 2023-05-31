const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();

const result = [];
for(let el of input) {
  const target = el[0];
  const sentence = el.slice(2);

  const regex = new RegExp(`([${target.toUpperCase()}${target.toLowerCase()}])`, 'g');
  const answer = sentence.match(regex);
  if(!answer) {
    result.push(`${target} 0`);
  } else {
    result.push(`${target} ${answer.length}`);
  }
}
console.log(result.join('\n'));