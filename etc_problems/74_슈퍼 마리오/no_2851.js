const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const arr = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const getScore = (arr) => {
    let sum = 0;

    for(let el of arr) {
        if(sum + el < 100) {
            sum += el;
        } else if(sum + el > 100) {
            if(100 - sum >= sum + el - 100) return sum + el;
            else return sum;
        } else {
            return 100;
        }
    }

    return sum;
}

console.log(getScore(arr));
