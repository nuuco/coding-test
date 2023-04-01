const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, m, l] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let count = 0;
const arr = new Array(n).fill(0);
let idx = 0;
arr[idx] = 1;

while(arr[idx] < m) {
    if(arr[idx] % 2 === 1) {
        idx = (idx + l) % n;
    } else {
        if(idx - l < 0) {
            idx = n + (idx - l);
        } else {
            idx = idx - l;
        }
    }
    arr[idx]++;
    count++;
}

console.log(count);