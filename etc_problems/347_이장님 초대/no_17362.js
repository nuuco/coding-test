const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input
  .split(" ")
  .map((el) => Number(el) + 1)
  .sort((a, b) => b - a);

let max = 0;
for (let i = 0; i < arr.length; i++) {
  const days = i + arr[i];
  if (max < days) {
    max = days;
  }
}

console.log(max + 1);
