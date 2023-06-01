const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let i = 0; i < input.length; i++) {
  if(i % 2 === 0) continue;

  const arr = input[i].split(' ').map(Number).sort((a, b) => b - a);
  let answer = 0;
  if(arr.length > 1) {
    answer = (arr[0] - arr[arr.length - 1]) * 2;
  }
  result.push(answer);
}

console.log(result.join('\n'));
