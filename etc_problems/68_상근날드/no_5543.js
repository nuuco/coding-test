const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const [bg_1, bg_2, bg_3, cola, cider] = input;

const result = Math.min(bg_1, bg_2, bg_3) + Math.min(cola, cider) - 50;

console.log(result);