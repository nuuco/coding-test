const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [nAndX, numList] = input;
let [n, x] = nAndX.split(" ");
const arr = numList.split(" ");
n = parseInt(n);
x = parseInt(x);

const resultArr = arr.filter(el => {
    return parseInt(el) < x;
});

console.log(resultArr.join(" "));