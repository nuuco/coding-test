const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.split(' ');

let count = 0;

for (let el of input) {
  if(t === el) {
    count++;
  }
}

console.log(count);
