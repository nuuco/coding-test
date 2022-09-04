//binomial coefficient = 이항 계수
// => 조합과 똑같다.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, r] = fs.readFileSync(filePath).toString().trim().split(' ').map(el => Number(el));

const fac = (n) => {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

const comb = (n, r) => {
    return fac(n) / (fac(n - r) * fac(r));
}

console.log(comb(n, r));