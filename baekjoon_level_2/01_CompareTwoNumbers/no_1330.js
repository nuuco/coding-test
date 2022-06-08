const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');
const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

if(num1 > num2) {
    console.log('>');
} else {
    console.log(num1 < num2 ? '<' : '==');
}