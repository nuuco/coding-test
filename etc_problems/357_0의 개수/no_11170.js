const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (start, end) => {
  let count = 0;
  for (let i = start; i <= end; i++) {
    count += String(i).split("0").length - 1;
  }
  return count;
};

const result = [];
for (let el of input) {
  const [start, end] = el.split(" ").map(Number);
  result.push(solution(start, end));
}

console.log(result.join("\n"));
