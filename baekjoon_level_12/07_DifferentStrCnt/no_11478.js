const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const strSet = new Set();

for(let i = 0; i < input.length; i++) {
    for(let j = i + 1; j <= input.length; j++) {
        strSet.add(input.slice(i, j))
    }
}

console.log(strSet.size);