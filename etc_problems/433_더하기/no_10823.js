const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim();

const result = input
  .replace(/\s/g, "")
  .match(/\d[\d]*/g)
  .map(Number)
  .reduce((acc, cur) => acc + cur, 0);

console.log(result);
