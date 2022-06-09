const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

//숫자로 파싱하는 거 까먹지 말자!
const hour = parseInt(input[0]);
const minute = parseInt(input[1]);
let result = "";

if(minute >= 45) result = `${hour} ${minute - 45}`;
else if(hour - 1 >= 0) result = `${hour - 1} ${15 + minute}`;
else result = `23 ${15 + minute}`; //houre === 0 일때

console.log(result);