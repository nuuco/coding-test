const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [r, c, n] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const answer = Math.ceil(r / n) * Math.ceil(c / n);

console.log(answer);
