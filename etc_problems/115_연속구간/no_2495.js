const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');


const solution = (str) => {
    let prev = str[0];
    let max = 1;
    let cur = 1;
    for(let i = 1; i < str.length; i++) {
        if(prev === str[i]) {
            cur++;
        }else {
            prev = str[i];
            cur = 1;
        }
    
        if(cur > max) {
            max = cur;
        }
    }
    
    return max;
}

const result = [];
for(let el of input){
    result.push(solution(el));
}

console.log(result.join('\n'));
