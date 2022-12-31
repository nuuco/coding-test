const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a)[2];
}

console.log(arr.join("\n"));
