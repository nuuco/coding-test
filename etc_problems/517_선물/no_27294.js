const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, x] = a.split(" ").map(Number);
const arr = b.split(" ").map(Number);

let min = Number.MAX_SAFE_INTEGER;
let target = [];
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] + arr[i + 1] < min) {
    min = arr[i] + arr[i + 1];
    target = [arr[i], arr[i + 1]];
  }
}

const answer = (target[0] + target[1]) * x;
console.log(answer);
