const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, arr, ...tc] = fs.readFileSync(filePath).toString().trim().split('\n');

let sumArr = arr.split(' ').map(Number);
sumArr.forEach((el, idx) => {
  if(idx > 0) {
    sumArr[idx] = sumArr[idx - 1] + el;
  }
})

const result = [];

for(let el of tc) {
  let [start, end] = el.split(' ').map(Number);
  if(start === 1) {
    result.push(sumArr[end - 1]);
    continue;
  }
  result.push(sumArr[end - 1] - sumArr[start - 2]);
}

console.log(result.join('\n'));

