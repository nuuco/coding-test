const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
    const [t, ...arr] = input;
    const result = [];
    for(let el of arr){
        let [idx, str] = el.split(' ');
        idx = Number(idx) - 1;
        str = str.substring(0, idx) + str.substring(idx + 1);
        result.push(str);
    }
    
    return result.join('\n');
}

console.log(solution(input));
