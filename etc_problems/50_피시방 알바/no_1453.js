const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, arrStr] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = arrStr.split(" ").map(Number);
const pc = new Array(100).fill(true);

let count = 0;
for (let el of arr) {
  if (pc[el - 1]) {
    pc[el - 1] = false;
  } else {
    count++;
  }
}

console.log(count);
