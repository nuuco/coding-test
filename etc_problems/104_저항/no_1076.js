const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b, c] = fs.readFileSync(filePath).toString().trim().split('\n');

const colors = {
    black: [0, 1],
    brown: [1, 10],
    red: [2, 100],
    orange: [3, 1000],
    yellow: [4, 10000],
    green: [5, 100000],
    blue: [6, 1000000],
    violet: [7, 10000000],
    grey: [8, 100000000],
    white: [9, 1000000000]
}

let result = String(colors[a][0]) + String(colors[b][0]); 
result = Number(result) * colors[c][1];

console.log(result);