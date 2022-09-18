const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (n, r) => {
    //m 개 중에서 n 개를 선택하는 조합 경우의 수를 리턴
    //조합 공식 = n! / ((n-r)! r!)
    const fac = (num) => {
        let result = 1;
        for(let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    let answer = fac(n);
    answer /= fac(n - r) * fac(r);
    answer = Math.round(answer);
    return answer;
}

const result = [];

for(let el of arr) {
    const [n, m] = el.split(' ').map(Number);
    result.push(solution(m, n));
}

console.log(result.join('\n'));