const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [dog, people] = fs.readFileSync(filePath).toString().trim().split('\n');

let [a, b, c, d] = dog.split(' ').map(Number);
let [p, m, n] = people.split(' ').map(Number);
let max = Math.max(p, m, n);

const arr = new Array(max + 1).fill(0);  //인덱스 0은 더미 데이터

for(let i = 1; i <= max; i++) {
  const aTerm = a + b;
  const bTerm = c + d;
  if(i % aTerm <= a && i % aTerm !== 0) {
    arr[i]++;
  }
  if(i % bTerm <= c && i % bTerm !== 0) {
    arr[i]++;
  }
}

console.log(arr[p]);
console.log(arr[m]);
console.log(arr[n]);


