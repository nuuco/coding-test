const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [X, N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
X = Number(X);

let sum = 0;
for(let el of arr) {
    el = el.split(' ').map(item => Number(item));
    sum += el[0] * el[1];
}

console.log(sum === X ? "Yes" : "No");
