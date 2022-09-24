const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...nArr] = fs.readFileSync(filePath).toString().trim().split('\n').map(el => Number(el));

const fibo = (n) => {
    const count_0 = [1, 0, 1];
    const count_1 = [0, 1, 1];

    for(let i = 3; i <= n; i++) {
        count_0[i] = count_0[i - 1] + count_0[i - 2];
        count_1[i] = count_1[i - 1] + count_1[i - 2];
    }

    return [count_0[n], count_1[n]];
}

const result = [];

for(let el of nArr) {
    result.push(fibo(el).join(' '));
}

console.log(result.join('\n'));
