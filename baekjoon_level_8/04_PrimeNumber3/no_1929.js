const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [M, N] = fs.readFileSync(filePath).toString().trim().split(' ').map(el => Number(el));

const primeArr = []
for(let i = M; i <= N; i++) {
    let isPrime = true;
    for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
        if(i % j === 0) isPrime = false;
    }
    if(isPrime && i !== 1) {
        primeArr.push(i);
    }
}

console.log(primeArr.join('\n'));
