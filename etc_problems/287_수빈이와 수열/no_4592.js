const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, str] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = str.split(" ").map(Number);

const sum = [arr[0]]; //sum[x] = arr[x] * (x + 1);
for (let i = 1; i < arr.length; i++) {
  sum.push(arr[i] * (i + 1));
}

const result = [arr[0]];

for (let i = 1; i < arr.length; i++) {
  result.push(sum[i] - sum[i - 1]);
}

console.log(result.join(' '));
