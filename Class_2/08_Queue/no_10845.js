const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

const pushQueue = (arr, x) => arr.push(x);

const popQueue = (arr) => arr.shift() || -1;

const sizeQueue = (arr) => arr.length;

const emptyQueue = (arr) => arr.length === 0 ? 1 : 0;

const frontQueue = (arr) => arr[0] || -1;

const backQueue = (arr) => arr[arr.length - 1] || -1;

const arr = [];
const result = [];

for(let input of inputs) {
    const command = input.split(' ');
    switch(command[0]) {
        case "push":
            pushQueue(arr, command[1]);
            break;
        case "pop":
            result.push(popQueue(arr));
            break;
        case "size":
            result.push(sizeQueue(arr));
            break;
        case "empty":
            result.push(emptyQueue(arr));
            break;
        case "front":
            result.push(frontQueue(arr));
            break;
        case "back":
            result.push(backQueue(arr));
            break;
        default:
            break;
    }
}

console.log(result.join('\n'));

