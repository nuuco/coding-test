const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b, c, d] = fs.readFileSync(filePath).toString().trim().split(' ');

const num_1 = Number(a + b);
const num_2 = Number(c + d);

console.log(num_1 + num_2);
