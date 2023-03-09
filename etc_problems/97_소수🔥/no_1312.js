const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b, n] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = (a, b, n) => {
    let share = Math.floor(a / b);
    let remainder = a % b;
    let i = 0;
    while(i < n) {
        // console.log(i, share, remainder);
        share = Math.floor(remainder * 10 / b);
        remainder = (remainder * 10) % b;
        i++;  
    }

    return share;

}

console.log(solution(a, b, n));

