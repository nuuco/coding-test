const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
let i = 1;
for(let el of input) {
  let answer = 'Scenario #' + i + ':\n';
  const [a, b, c] = el.split(' ').map(Number).sort((a, b) => a - b);
  
  if(a**2 + b**2 === c**2) {
    answer += 'yes';
  } else {
    answer += 'no';
  }
  result.push(answer);
  i++;
}

console.log(result.join('\n\n'));