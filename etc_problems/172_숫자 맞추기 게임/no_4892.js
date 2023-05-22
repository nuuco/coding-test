const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

input.pop();

const result = [];
for(let i = 0; i < input.length; i++) {
  const n1 = input[i] * 3;
  const isEven = n1 % 2 === 0;
  let n2, n3, n4;
  if(isEven) {
    n2 = n1 / 2;
  } else {
    n2 = (n1 + 1) / 2; 
  }
  n3 = n2 * 3;
  n4 = Math.floor(n3 / 9);
  const answer = `${i + 1}. ${isEven ? 'even' : 'odd'} ${n4}`;

  result.push(answer);
}

console.log(result.join('\n'));
