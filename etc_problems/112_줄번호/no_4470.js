const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const result = [];
for(let i = 0; i < arr.length; i++) {
    result.push(`${i + 1}. ${arr[i]}`);
}

console.log(result.join('\n'));
