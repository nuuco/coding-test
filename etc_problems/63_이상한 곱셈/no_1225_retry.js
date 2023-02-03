const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

let [A, B] = fs.readFileSync(filePath).toString().trim().split(' ');

const objA = {};
A = A.split('');

for(let a of A) {
    if(!objA[a]) {
        objA[a] = 1;
    }else {
        objA[a]++;
    }
}

const sumOfB = BigInt(B.split('').map(Number).reduce((acc, cur) => acc + cur, 0));

let sum = BigInt(0);
for(let a in objA) {
    sum += BigInt(a) * BigInt(objA[a]) * sumOfB
}

console.log(sum.toString());


