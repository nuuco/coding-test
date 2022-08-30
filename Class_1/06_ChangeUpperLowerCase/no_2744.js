const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim();

let result = "";

for(let char of input) {
    if(char === char.toUpperCase()) {
        result += char.toLowerCase();
    } else {
        result += char.toUpperCase();
    }
}

console.log(result);
