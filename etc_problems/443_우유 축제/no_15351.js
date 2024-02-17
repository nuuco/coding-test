const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().split("\n");

const arr = input.split(" ").map(Number);

let now = 0;
let count = 0;

for (let el of arr) {
  if (el === now) {
    count++;
    if (now === 2) {
      now = 0;
    } else {
      now++;
    }
  }
}

console.log(count);
