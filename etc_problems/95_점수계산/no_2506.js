const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, arrStr] = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = arrStr.split(' ').map(Number);

const score = [arr[0]];

for(let i = 1; i < arr.length; i++){
    if(arr[i] === 1) {
        if(arr[i - 1] === 1) {
            score[i] = score[i - 1] + 1;
        } else {
            score[i] = 1;
        }
    } else {
        score[i] = 0;
    }
}

const total = score.reduce((acc, cur) => acc + cur, 0);

console.log(total);