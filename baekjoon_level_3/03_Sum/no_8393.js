const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const num = parseInt(fs.readFileSync(filePath).toString().trim());

//반복문 없이 풀기...?
console.log((num + 1) * num / 2);