const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [nAndK, arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = nAndK.split(' ').map(el => Number(el));
const scoreArr = arr.split(' ').map(el => Number(el));

scoreArr.sort((a, b) => b - a);

console.log(scoreArr[k - 1]);

