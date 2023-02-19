const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const sqrtA = Math.sqrt(a);
const sqrtB = Math.sqrt(b);

let sum = 0;
let min = 0;

for(let i = Math.ceil(sqrtA); i <= sqrtB; i++) {
    const tmp = i ** 2;
    sum += tmp;
    if(min === 0){
        min = tmp;
    }
}

if(sum === 0) {
    console.log(-1);
} else {
    console.log(sum);
    console.log(min);
}