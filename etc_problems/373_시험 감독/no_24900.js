const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const [b, c] = input[2].split(" ").map(Number);

let result = BigInt(0);
for (let a of arr) {
  let answer = 0;
  const sub = a - b;
  if (sub < 0) answer = 1;
  else {
    answer = Math.ceil((a - b) / c) + 1;
  }
  result += BigInt(answer);
}
console.log(result.toString());
