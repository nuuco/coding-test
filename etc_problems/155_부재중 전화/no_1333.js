const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, l, d] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let i = 1;
let time = l;
let call = d;

for(let i = 1; i <= n; i++) {
  while(call < time) {
    call += d;
  }

  if(time <= call && call < time + 5) {
    break;
  }

  if(i === n) {
    break;
  } else {
    time += 5 + l;
  }
}

console.log(call);

