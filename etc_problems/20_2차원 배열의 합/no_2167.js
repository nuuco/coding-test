const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [arrX, arrY] = input[0].split(" ").map(Number);
input.shift();

let tmp = input.splice(0, arrX);
const arr = [];
for (let i = 0; i < arrX; i++) {
  arr[i] = tmp[i].split(" ").map(Number);
}

input.shift();

const rangeArr = [];
for (let i = 0; i < input.length; i++) {
  rangeArr[i] = input[i].split(" ").map((el) => Number(el) - 1);
}

const result = [];
for (let el of rangeArr) {
  const [x1, y1, x2, y2] = el;
  let sum = 0;
  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      sum += arr[i][j];
    }
  }
  result.push(sum);
}

console.log(result.join("\n"));
