const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [time, second] = fs.readFileSync(filePath).toString().trim().split('\n');

let [h, m, s] = time.split(' ').map(Number);
second = Number(second);

s += second;

if(s >= 60) {
  let tmp = Math.floor(s / 60);
  s = s % 60;
  m += tmp;
}

if(m >= 60) {
  let tmp = Math.floor(m / 60);
  m = m % 60;
  h += tmp;
}

if(h >= 24) {
  h = h % 24;
}

console.log(`${h} ${m} ${s}`);
