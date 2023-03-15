const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [a, b, c] = input;
a = a.split(' ').map(Number);
b = b.split(' ').map(Number);
c = c.split(' ').map(Number);

//x 좌표
let x = a[0];
if(x === b[0]) {
    x = c[0];
} else if(x === c[0]) {
    x = b[0];
}

//y 좌표
let y = a[1];
if(y === b[1]) {
    y = c[1];
} else if(y === c[1]) {
    y = b[1];
}

console.log(x + ' ' + y);