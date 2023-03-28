const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = (n) => {
    const arr = new Array(n + 1).fill(true);
    arr[0] = false;

    for(let i = 2; i < arr.length; i++) {
        for(let j = 1; j <= n / i; j++) {
            arr[i * j] = !arr[i * j];
        }
    }

    const answer = arr.filter(el => el).length;
    return answer;
}

const result = [];
for(let el of arr) {
    result.push(solution(el));
}

console.log(result.join('\n'));