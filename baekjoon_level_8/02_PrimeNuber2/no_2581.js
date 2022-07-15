const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [M, N] = fs.readFileSync(filePath).toString().trim().split('\n').map(el => Number(el));

const primeArr = [];

for(let i = M; i <= N; i++) {
    let isPrimeNum = true;
    for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
        if(i % j === 0) isPrimeNum = false;
    }
    if(isPrimeNum && i !== 1) {
        primeArr.push(i);
    }
}

if(primeArr[0] === undefined) {
    console.log(-1);
} else {
    const sum = primeArr.reduce((acc, cur) => acc + cur, 0);
    console.log(sum);
    console.log(primeArr[0]);
}



