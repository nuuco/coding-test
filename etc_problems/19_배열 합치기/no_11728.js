const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [t, ...strArr] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

for (let el of strArr) {
  result.push(...el.split(" ").map(Number));
}

result.sort((a, b) => a - b);
console.log(result.join(" "));
