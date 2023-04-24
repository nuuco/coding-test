const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const [, w, h] = t.split(' ').map(Number);
const nums = input.map(Number);
const longLen = Math.sqrt(w**2 + h**2);

const result = [];
for(let el of nums) {
  if(el <= longLen) {
    result.push('DA');
  } else {
    result.push('NE');
  }
}

console.log(result.join('\n'));