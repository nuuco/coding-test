const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = t.split(' ').map(Number);

const memo = {};
const result = [];
for(let i = 0; i < arr.length; i++) {
  if(i < n) {
    const [site, pw] = arr[i].split(' ');
    memo[site] = pw;
  } else {
    result.push(memo[arr[i]]);
  }
}

console.log(result.join('\n'));

