//어려웠다...
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const n = Number(fs.readFileSync(filePath).toString().trim());

let sum = 1;
let layer = 1;

while(n > sum) {
    layer++;
    sum += layer;
}

const x = layer - (sum - n);
const y = sum - n + 1;  //= layer + 1 - x

let result = "";
if(layer % 2 === 0) {
    result = x + '/' + y;
} else {
    result = y + '/' + x;
}

console.log(result);

/** 다른 좋았던 풀이
solution(input);

function solution(X) {
    let i = 1;

    while (true) {
        X -= i;
        if (X <= 0) {
            X += i;
            break;
        }
        i++;
    }

    if (i % 2 === 1) {
        console.log(`${i - (X - 1)}/${1 + (X - 1)}`);
    } else {
        console.log(`${1 + (X - 1)}/${i - (X - 1)}`);
    }
}
 * 
 */