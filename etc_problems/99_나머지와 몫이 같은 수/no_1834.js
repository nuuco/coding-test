const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = BigInt(fs.readFileSync(filePath).toString().trim());

let sum = BigInt(0);
for(let i = 1; i < input; i++) {
    sum += input * BigInt(i) + BigInt(i);
}

console.log(String(sum));