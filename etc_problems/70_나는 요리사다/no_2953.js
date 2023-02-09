const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let max = -1;
let winner = "";

for(let i = 0; i < input.length; i++) {
    const score = input[i].split(' ').reduce((acc, cur) => acc + Number(cur), 0);
    if(score > max) {
        winner = i + 1;
        max = score;
    }
}

console.log(`${winner} ${max}`);