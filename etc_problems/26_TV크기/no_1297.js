const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [d, h, w] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const x = Math.sqrt(d ** 2 / (h ** 2 + w ** 2));

const height = parseInt(x * h);
const width = parseInt(x * w);

console.log(`${height} ${width}`);
