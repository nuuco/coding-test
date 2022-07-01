const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const alphabetList = 'abcdefghijklmnopqrstuvwxyz'
let result = '';
for(let al of alphabetList) {
    result +=  input.indexOf(al) + ' ';
}

console.log(result);