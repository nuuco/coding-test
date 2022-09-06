const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [x, y, w, h] = fs.readFileSync(filePath).toString().trim().split(' ').map(el => Number(el));

const result = Math.min(x, w - x, y, h - y);

console.log(result);