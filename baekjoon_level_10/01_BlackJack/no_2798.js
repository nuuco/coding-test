const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [first, second] = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = first.split(' ').map(el => Number(el));
const arr = second.split(' ').map(el => Number(el));

let sum = -1;

//조합 - 브루트 포스
for(let i = 0; i <= arr.length - 3; i++) {
    for(let j = i + 1; j <= arr.length - 2; j++) {
        for(let k = j + 1; k <= arr.length - 1; k++) {
            const tmp = arr[i] + arr[j] + arr[k];
            if(tmp <= M && tmp > sum) {
                sum = tmp;
            }
        }
    }
}

console.log(sum);

