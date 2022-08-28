const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

const pushStack = (arr, x) => arr.push(x);

const popStack = (arr) => arr.pop() || -1;

const sizeStack = (arr) => arr.length;

const emptyStack = (arr) => arr.length === 0 ? 1 : 0;

const topStack = (arr) => arr[arr.length - 1] || -1;

const arr = [];
const result = [];

for(let input of inputs) {
    const command = input.split(' ');
    switch(command[0]) {
        case "push":
            pushStack(arr, command[1]);
            break;
        case "pop":
            result.push(popStack(arr));
            break;
        case "size":
            result.push(sizeStack(arr));
            break;
        case "empty":
            result.push(emptyStack(arr));
            break;
        case "top":
            result.push(topStack(arr));
            break;
        default:
            break;
    }
}

console.log(result.join('\n'));

