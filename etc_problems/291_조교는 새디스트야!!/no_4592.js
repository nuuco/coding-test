const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input.split(" ");

let count = 0;
for (let i = 1; i <= arr.length; i++) {
  if (String(i) !== arr[i - 1]) {
    count++;
  }
}

console.log(count);
