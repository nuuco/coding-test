const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(t);

const arr = new Array(n);
const result = new Array(n);
for (let i = 0; i < arr.length; i++) {
  arr[i] = input[i].replaceAll(".", "0").split("").map(Number);
  result[i] = input[i].replaceAll(/\d/g, "*").replaceAll(".", "0").split("");
}

const checkSurround = (arr, x, y) => {
  let sum = 0;
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (i === x && j === y) continue;
      if (i >= 0 && i < arr.length && j >= 0 && j < arr[0].length) {
        sum += arr[i][j];
      }
    }
  }

  if (sum >= 10) return "M";
  return sum;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (result[i][j] === "*") continue;
    result[i][j] = checkSurround(arr, i, j);
  }
}

console.log(result.join("\n").replaceAll(",", ""));
