const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = Number(fs.readFileSync(filePath).toString().trim());

const result = [];

for(let i = 1; i <= input; i++) {
  result.push(`Hello World, Judge ${i}!`);
}

console.log(result.join('\n'));