//소수(Prime number) 판별 문제
//소수 : 1과 자기자신으로만 나누어 떨어지는 수 (1은 소수가 아니다.)
//이론적으로 2 ~ 자기자신의 제곱근 사이의 수까지만 나누어 떨어지지 않는지 확인하면 된다.
/** 그 이론은 이렇다. 
 * n 이 소수라면 2로 나누어떨어지지 않을 것이다. (물론 n이 2가 아닐 때)
 * n / 2 보다 더 큰 수 들에 2를 곱해도 n보다 더 커지기 때문에 확인할 필요가 없다.
 * 더 확장헤서 n 이 소수라면 3으로 나누어떨어지지 않을 것이다. (물론 n이 3이 아닐 때)
 * n / 3 보다 더 큰 수 들에 3을 곱해도 n보다 더 커지기 때문에 확인할 필요가 없다.
 * 이렇게 n / 4, n / 5 ... 확장을 하다보면 n / √n 까지 도달하게 된다.
 * 따라서 √n 보다 큰 수들은 확인하지 않아도 된다.
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(el => Number(el));

let cnt = 0;

for(let num of arr) {
    let isPrimeNum = true;
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i === 0) {isPrimeNum = false};
    }
    if(isPrimeNum && num !== 1) cnt++;
}

console.log(cnt);
