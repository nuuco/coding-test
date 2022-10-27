const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let el of arr) {
  const words = el.split(' ');
  const answer = [];
  for(let word of words) {
    let oneWord = "";
    for(let i = word.length - 1; i >= 0; i--) {
      oneWord += word[i];
    }
    answer.push(oneWord);
  }
  result.push(answer.join(' '));
}

console.log(result.join('\n'));

