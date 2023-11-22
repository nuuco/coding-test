const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = t.split(" ").map(Number);

const arr = new Array(n + 1).fill(0);
for (let el of input) {
  const [a, b] = el.split(" ").map(Number);
  arr[a]++;
  arr[b]++;
}

arr.shift();

console.log(arr.join("\n"));
