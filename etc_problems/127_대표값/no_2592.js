const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let sum = 0;
let obj = {most: input[0]};
for(let el of input) {
  sum += el;
  if(!obj[el]){
    obj[el] = 1;
  } else {
    obj[el]++;
  }

  if(obj[obj.most] < obj[el]) {
    obj.most = el;
  }
}

avg = sum / input.length;

console.log(avg);
console.log(obj.most);

