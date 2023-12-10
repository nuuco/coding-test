const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const getDiffCount = (arr) => {
  let [a, b, c, d] = arr;
  let count = 0;
  let diffArr = [a, b, c, d];
  while (new Set(diffArr).size > 1) {
    [a, b, c, d] = diffArr;
    diffArr = [Math.abs(a - b), Math.abs(b - c), Math.abs(c - d), Math.abs(d - a)];
    count++;
  }
  return count;
};

const result = [];
for (let el of input) {
  const item = el.split(" ").map(Number);
  result.push(getDiffCount(item));
}

console.log(result.join("\n"));
