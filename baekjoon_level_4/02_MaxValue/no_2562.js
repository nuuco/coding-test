const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(el => parseInt(el));

const idx = input.reduce((acc, cur, idx) => {
    if(input[acc] < cur) acc = idx;
    return acc;
}, 0)
console.log(input[idx] + '\n' + (idx + 1));