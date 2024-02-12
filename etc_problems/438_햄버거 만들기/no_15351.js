const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [x, y] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let answer = 0;

let halfBun = Math.floor(x / 2);

if (halfBun <= y) {
  answer = halfBun;
} else {
  answer = y;
}

console.log(answer);
