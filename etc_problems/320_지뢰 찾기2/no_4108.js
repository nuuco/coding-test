const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const result = [];

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

  return sum;
};

while (input.length > 0) {
  const [n, m] = input.shift().split(" ").map(Number);
  const tmp = input.splice(0, n);

  const arr = new Array(n);
  const answer = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = tmp[i].replaceAll(".", "0").replaceAll("*", "1").split("").map(Number);
    answer[i] = tmp[i].split("");
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (answer[i][j] === "*") continue;
      answer[i][j] = checkSurround(arr, i, j);
    }
  }

  result.push(answer.join("\n").replaceAll(",", ""));
}

console.log(result.join("\n"));
