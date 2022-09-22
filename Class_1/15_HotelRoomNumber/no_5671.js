const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const arr = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (n, m) => {
    let count = 0;
    const regex = /(\d).*\1/;

    for(let i = n; i <= m; i++) {
        if(!regex.test(String(i))) count++;
    }
    return count;
}

const result = [];
for(let el of arr) {
    const [n, m] = el.split(' ').map(Number);
    result.push(solution(n, m));
}

console.log(result.join('\n'));