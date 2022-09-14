const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

arr = arr.map(Number);

const stack = [];

for(let el of arr) {
    if(el !== 0) {
        stack.push(el);
    } else {
        stack.pop();
    }
}

const result = stack.reduce((acc, cur) => acc + cur, 0);
console.log(result);