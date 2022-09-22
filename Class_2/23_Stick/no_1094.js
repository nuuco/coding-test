const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const x = Number(fs.readFileSync(filePath).toString().trim());

const sticks = [64, 32, 16, 8, 4, 2, 1];

const solution = (x) => {
    let count = 0;
    let rest = x;

    for(let el of sticks) {
        if(rest / el >= 1) {
            count++;
            rest -= el;
        }
    }

    return count;
}

console.log(solution(x));