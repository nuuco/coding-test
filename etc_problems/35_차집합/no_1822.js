const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, aStr, bStr] = fs.readFileSync(filePath).toString().trim().split("\n");

const a = aStr.split(" ").map(Number);
const b = bStr.split(" ").map(Number);

const obj = {};

for (let el of a) {
  obj[el] = true;
}

for (let el of b) {
  delete obj[el];
}

const result = Object.keys(obj);
result.sort((a, b) => a - b);

console.log(result.length);
if (result.length > 0) {
  console.log(result.join(" "));
}
