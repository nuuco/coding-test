const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

//공백만 문자열로 들어올 수 있다!
const input = fs.readFileSync(filePath).toString().trim();

if(input === '') console.log(0);
else {
    console.log(input.split(' ').length);
}