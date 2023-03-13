const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const result = [];
for(let el of arr) {
    let rest = el;
    let qCount = Math.floor(rest / 25);
    rest = rest % 25;
    let dCount = Math.floor(rest / 10);
    rest = rest % 10;
    let nCount = Math.floor(rest / 5);
    rest = rest % 5;
    let pCount = rest

    result.push(`${qCount} ${dCount} ${nCount} ${pCount}`);
}

console.log(result.join('\n'));