const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.split(" ").map(Number);
let sum = 0;
let tmp = [];
for (let i = 0; i < arr.length; i++) {
  let hasNext = i !== arr.length - 1 && arr[i] === arr[i + 1] - 1;
  tmp.push(arr[i]);
  if (!hasNext) {
    sum += tmp[0];
    tmp = [];
  }
}

console.log(sum);
