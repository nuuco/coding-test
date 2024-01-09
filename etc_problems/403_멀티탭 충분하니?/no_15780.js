const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const n = t.split(" ").map(Number)[0];
const arr = input.split(" ").map(Number);

let max = 0;
for (let el of arr) {
  max += Math.ceil(el / 2);
}

if (n <= max) {
  console.log("YES");
} else {
  console.log("NO");
}
