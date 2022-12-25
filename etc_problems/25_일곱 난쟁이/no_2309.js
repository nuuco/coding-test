const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const arr = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

arr.sort((a, b) => a - b);
const sum = arr.reduce((acc, cur) => acc + cur, 0);
const rest = sum - 100;
const twoNum = [];

for (let i = 0; i <= arr.length - 2; i++) {
  for (let j = i + 1; j <= arr.length - 1; j++) {
    if (arr[i] + arr[j] === rest) {
      twoNum.push(i, j);
      break;
    }
  }

  if (twoNum.length >= 2) break;
}
const result = [];

for (let i = 0; i < arr.length; i++) {
  if (i !== twoNum[0] && i !== twoNum[1]) {
    result.push(arr[i]);
  }
}
console.log(result.join("\n"));
