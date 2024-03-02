const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.split(" ").map(Number);
let result = arr[0];

for (let el of arr) {
  if (el > result) {
    result = el;
  }
}

console.log(result);
