const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = Number(fs.readFileSync(filePath).toString().trim());

const solution = (n) => {
    let count = 0;
    let k = 0;
    let sum = 0;
    let rest = n;
    while(rest > 0){
        k++;
        sum += k;
        if(sum <= rest) {
            count++;
        }else {
            rest = rest - sum + k;
            k = 0;
            sum = 0;
        }
    }
    return count;
}

console.log(solution(input));