const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let i = 1; i <= input.length; i++) {
  const answer = [];
  answer.push(`String #${i}`);

  const string = input[i - 1].split('');
  for(let j = 0; j < string.length; j++) {
    let charCode = string[j].charCodeAt(0) + 1;
    if(charCode === 91) charCode = 65;
    string[j] = String.fromCharCode(charCode);
  }
  answer.push(string.join(''));

  result.push(answer.join('\n'));
}

console.log(result.join('\n\n'));