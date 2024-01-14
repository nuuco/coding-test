const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];
while (input.length > 0) {
  const n = Number(input.shift());
  const arr = input.splice(0, n);

  let sum = 0;
  for (let el of arr) {
    const costs = el
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a);
    if (costs[0] > 0) {
      sum += costs[0];
    }
  }
  result.push(sum);
}

console.log(result.join("\n"));
