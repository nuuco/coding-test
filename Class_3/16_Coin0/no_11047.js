const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, cost] = t.split(' ').map(Number);

const coinArr = arr.map(Number).sort((a, b) => b - a);
let count = 0;

for(let i = 0; i < coinArr.length; i++) {
  if(cost / coinArr[i] >= 1) {
    count += parseInt(cost / coinArr[i]);
    cost = cost % coinArr[i];
  }
}

console.log(count);

