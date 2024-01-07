const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (n, m) => {
  if (n < 12 || m < 4) {
    return -1;
  }

  return m * 11 + 4;
};

const result = [];

for (let el of input) {
  const [n, m] = el.split(" ").map(Number);
  result.push(solution(n, m));
}

console.log(result.join("\n"));
