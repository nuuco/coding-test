const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let i = 0; i < input.length; i++) {
  if(i % 2 === 0) {
    continue;
  }

  const arr = input[i].split(' ').map(Number);
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  result.push(sum);
}

console.log(result.join('\n'));

