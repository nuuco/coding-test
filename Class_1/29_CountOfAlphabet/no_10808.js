const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

//'a'.charCodeAt() === 97
const arr = new Array(26).fill(0);

for(let char of input) {
  const idx = char.charCodeAt() - 97;
  arr[idx]++;
}

console.log(arr.join(' '));