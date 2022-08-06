const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = fs.readFileSync(filePath).toString().trim().split(' ').map(el => Number(el));

n[0] = 1 - n[0]; //킹 1
n[1] = 1 - n[1]; //퀸 1
n[2] = 2 - n[2]; //룩 2
n[3] = 2 - n[3]; //비숍 2
n[4] = 2 - n[4]; //나이트 2
n[5] = 8 - n[5]; //폰 8

console.log(n.join(' '));

