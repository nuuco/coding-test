const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, second] = t.split(' ').map(Number);

const arr = new Array(second + 1).fill(false);

for(let el of input) {
  const sec = Number(el);
  let i = 1;
  while(sec * i <= second) {
    arr[sec * i] = true;
    i++;
  }
}

const answer = arr.filter(el => el).length;

console.log(answer);

