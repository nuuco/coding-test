const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = parseInt(fs.readFileSync(filePath).toString().trim());

let result = '';
for(let i = input; i >= 1; i--){
    result += i + '\n';
}

console.log(result);
