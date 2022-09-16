const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let i = 0; i < input.length - 1; i++) {
    let count = 0;
    for(let char of input[i]) {
        if(/[aeiouAEIOU]/.test(char)) {
            count++;
        }
    }
    result.push(count);
}

console.log(result.join('\n'));