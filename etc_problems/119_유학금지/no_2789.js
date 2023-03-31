const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('');

let result = "";
const regEx = /[CAMBRIDGE]/;

for(let char of input) {
    if(!regEx.test(char)) {
        result += char;
    }
}

console.log(result);

