const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.pop();

const result = [];
const arr = [0, 1, 5];

for (let el of input) {
  if (!arr[el]) {
    for (let i = 3; i <= el; i++) {
      arr[i] = arr[i - 1] + i ** 2;
    }
  }

  result.push(arr[el]);
}

console.log(result.join("\n"));
