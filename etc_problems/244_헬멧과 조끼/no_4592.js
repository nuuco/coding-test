const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, n, m] = fs.readFileSync(filePath).toString().trim().split('\n');

const nArr = n.split(' ');
const mArr = m.split(' ');
let nMax = 0;
let mMax = 0;

for(let el of nArr) {
  let tmp = Number(el);
  if(nMax < tmp) {
    nMax = tmp;
  }
}

for(let el of mArr) {
  let tmp = Number(el);
  if(mMax < tmp) {
    mMax = tmp;
  }
}

console.log(nMax + mMax);

