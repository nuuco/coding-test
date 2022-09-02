const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];

for(let el of arr) {
    result.push(el[0] + el[el.length - 1]);
}

console.log(result.join('\n'));
