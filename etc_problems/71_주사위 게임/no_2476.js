const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
let max = 0;

for(let el of arr) {
    const [a, b, c] = el.split(' ').map(Number);
    const set = new Set([a, b, c]);
    let reward = 0;

    //3개 같은 수인 경우
    if(set.size === 1) {
        reward = 10000 + (a * 1000);
    } else if(set.size === 2) {  //2개가 같은 수인 경우
        if(a === b) {
            reward = 1000 + (a * 100);
        } else { //a === c or b === c
            reward = 1000 + (c * 100);
        }
    } else {  //다 다른 경우
        reward = Math.max(a, b, c) * 100;
    }

    if(max < reward) {
        max = reward;
    }
}

console.log(max);