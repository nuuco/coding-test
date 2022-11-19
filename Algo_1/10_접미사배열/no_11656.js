const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim();

const arr = [];
for(let i = 0; i < input.length; i++) {
  arr.push(input.slice(i));
}

arr.sort();
console.log(arr.join('\n'));