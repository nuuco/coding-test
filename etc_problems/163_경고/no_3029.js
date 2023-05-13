const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [current, target] = fs.readFileSync(filePath).toString().trim().split('\n');

//target - current
const currentArr = current.split(':').map(Number);
const targetArr = target.split(':').map(Number);

let h = 0;
let m = 0;
let s = 0;

s += targetArr[2] - currentArr[2];

if(s < 0) {
  m--;
  s += 60;
}

m += targetArr[1] - currentArr[1];

if(m < 0) {
  h--;
  m += 60;
}

h += targetArr[0] - currentArr[0];

if(h < 0) {
  h += 24;
}

if(h === 0 && m === 0 && s === 0) {
  h = 24;
}

h = String(h);
m = String(m);
s = String(s);

const result = `${h.length < 2 ? '0' + h : h}:${m.length < 2 ? '0' + m : m}:${s.length < 2 ? '0' + s : s}`;

console.log(result);
