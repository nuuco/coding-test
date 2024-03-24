const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
const b = Number(input);

const p = 5 * b - 400;

let c = 0;
if (p < 100) {
  c = 1;
} else if (p > 100) {
  c = -1;
}

console.log(`${p}\n${c}`);
