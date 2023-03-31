const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (inputArr) => {
    const result = [];

    for(let name of inputArr) {
        result.push(name.toLowerCase());
    }

    return result.join('\n');
}

console.log(solution(input));