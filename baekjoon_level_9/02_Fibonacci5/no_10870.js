const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

const memo = [0, 1];

//풀이 1 : 재귀로 풀기
// const fibo = (n) => {
//     if(memo[n] !== undefined) return memo[n];

//     memo[n] = fibo(n-1) + fibo(n-2);
//     return memo[n];
// }

// console.log(fibo(n));

//풀이 2 : for 문으로 풀기
for(let i = 2; i <= n; i++) {
    memo[i] = memo[i-1] + memo[i-2];
}
console.log(memo[n]);


