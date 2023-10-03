const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = [];
let count = 0;
for (let el of input) {
  const [n, road] = el.split(" ").map(Number);
  if (arr[n] !== undefined) {
    if (arr[n] !== road) {
      arr[n] = road;
      count++;
    }
  } else {
    arr[n] = road;
  }
}

console.log(count);
