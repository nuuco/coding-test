const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();
const num = parseFloat(input);

for(let i = 1; i < 10; i++){
    console.log(`${num} * ${i} = ${num * i}`);
}