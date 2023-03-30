const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...tc] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (arr) => {
    const even = [];
    for(let el of arr) {
        if(el % 2 === 0) {
            even.push(el);
        }
    }

    even.sort((a, b) => a - b);
    const sum = even.reduce((acc, cur) => acc + cur, 0);
    const min = even[0];

    return `${sum} ${min}`;
}

const result = [];
for(let el of tc) {
    const arr = el.split(' ').map(Number);
    result.push(solution(arr));
}

console.log(result.join('\n'));