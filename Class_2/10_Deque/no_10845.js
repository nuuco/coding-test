const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

const push_front_Deque = (arr, x) => arr.unshift(x);

const push_back_Deque = (arr, x) => arr.push(x);

const pop_front_Deque = (arr) => arr.shift() || -1;

const pop_back_Deque = (arr) => arr.pop() || -1;

const sizeDeque = (arr) => arr.length;

const emptyDeque = (arr) => arr.length === 0 ? 1 : 0;

const frontDeque = (arr) => arr[0] || -1;

const backDeque = (arr) => arr[arr.length - 1] || -1;

const arr = [];
const result = [];

for(let input of inputs) {
    const command = input.split(' ');
    switch(command[0]) {
        case "push_front":
            push_front_Deque(arr, command[1]);
            break;
        case "push_back":
            push_back_Deque(arr, command[1]);
            break;
        case "pop_front":
            result.push(pop_front_Deque(arr));
            break;
        case "pop_back":
            result.push(pop_back_Deque(arr));
            break;
        case "size":
            result.push(sizeDeque(arr));
            break;
        case "empty":
            result.push(emptyDeque(arr));
            break;
        case "front":
            result.push(frontDeque(arr));
            break;
        case "back":
            result.push(backDeque(arr));
            break;
        default:
            break;
    }
}

console.log(result.join('\n'));

