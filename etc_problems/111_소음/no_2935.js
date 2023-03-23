const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [num1, oper, num2] = fs.readFileSync(filePath).toString().trim().split('\n');

const num1ZeroLen = num1.length - 1;
const num2ZeroLen = num2.length - 1;

let result;
if(oper === '*'){
    result = '1' + '0'.repeat(num1ZeroLen + num2ZeroLen);
}

if(oper === '+'){
    if(num1 === num2) {
        result = '2' + '0'.repeat(num1ZeroLen);
    } else  if(num1 > num2) {
        result = num1.slice(0, num1.length - num2.length) + num2;
    } else {
        result = num2.slice(0, num2.length - num1.length) + num1;
    }
}

console.log(result);