const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const arr = fs.readFileSync(filePath).toString().trim().split('\n').map(el => Number(el));

arr.sort((a, b) => a - b);

let idx = 0;
for(let i = 1; i <= 30; i++) {
    if(arr[idx] === i) {
        idx++;
        continue;
    }
    console.log(i);
}