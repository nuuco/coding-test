const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

let [t, input, max] = fs.readFileSync(filePath).toString().trim().split('\n');

const files = input.split(' ').map(Number);

max = Number(max);

let result = 0;
for(let file of files) {
  const share = Math.ceil(file / max);
  result += max * share;
}

console.log(result);
