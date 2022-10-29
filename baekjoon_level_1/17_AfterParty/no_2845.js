const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

let [t, arr] = fs.readFileSync(filePath).toString().trim().split('\n');
let [num, l] = t.split(' ').map(Number);
let myNum = num * l;

arr = arr.split(' ').map(Number);

const result = [];
for(let el of arr) {
  result.push(el - myNum);
}

console.log(result.join(' '));

