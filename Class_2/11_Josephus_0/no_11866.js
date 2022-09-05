const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(el => Number(el));

const numArr = [];
for(let i = 1; i <= n; i++) {
    numArr.push(i);
}

let count = 0;
let i = 0;
const result = [];
while(numArr.length !== 0) {
    count++;
    if(count === k) {
        result.push(numArr.splice(i, 1)[0]);
        i--;
        count = 0;
    }
    i++;
    if(i >= numArr.length) i = 0;
}

console.log(`<${result.join(', ')}>`);
