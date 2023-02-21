const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = (n, k) => {
    const primeArr = Array(n + 1).fill(true);
    primeArr[0] = false;
    primeArr[1] = false;

    let count = 0;

    for (let i = 2; i <= n; i++) {
        if (primeArr[i]) {
            let j = 1;
            while (i * j <= n) {
                if(primeArr[i * j]){
                    primeArr[i * j] = false;
                    count++;
                }
                
                if(count === k) {
                    return i * j;
                }
                j++;
            }
        }
    }
}

console.log(solution(n, k));