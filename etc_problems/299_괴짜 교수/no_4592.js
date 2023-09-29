const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];

for (let el of input) {
  const [d, n, s, p] = el.split(" ").map(Number);

  const sTime = n * s;
  const pTime = d + n * p;

  if (sTime < pTime) {
    result.push("do not parallelize");
  } else if (sTime > pTime) {
    result.push("parallelize");
  } else {
    result.push("does not matter");
  }
}

console.log(result.join("\n"));
