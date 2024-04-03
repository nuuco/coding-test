const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const numbers = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const arr = new Array(10).fill(0);

for (let el of numbers) {
  arr[el]++;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(i);
    break;
  }
}
