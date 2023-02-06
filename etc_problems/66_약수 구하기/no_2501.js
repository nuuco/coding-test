const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let num = 0;

for(let i = 1; i <= n; i++) {
    if(n % i === 0) {
        num++;
        if(num === k) {
            console.log(i);
        }
    }
}

if(num < k ) {
    console.log(0);
}