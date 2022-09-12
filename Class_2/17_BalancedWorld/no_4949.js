const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (str) => {
    const stack = [];
    for(let char of str) {
        if(char === '(' || char === '[') {
            stack.push(char);
        }

        if(char === ')') {
            if(stack[stack.length - 1] !== '(') return "no";
            stack.pop();
        }

        if(char === ']') {
            if(stack[stack.length - 1] !== '[') return "no";
            stack.pop();
        }
    }

    if(stack.length !== 0) return "no";
    return "yes"; 
}

const result = [];
for(let i = 0; i < arr.length - 1; i++) {
    result.push(solution(arr[i]));
}

console.log(result.join('\n'));
