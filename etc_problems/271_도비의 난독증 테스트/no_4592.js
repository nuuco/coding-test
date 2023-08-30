const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

input.pop();

while (input.length > 0) {
  const n = Number(input.shift());
  const arr = input.splice(0, n);
  const lowerArr = arr.map(el => el.toLowerCase());
  lowerArr.sort();
  const first = lowerArr[0];
  const a = arr.filter(el => el.toLowerCase() === first)[0];
  result.push(a);
}

console.log(result.join("\n"));
