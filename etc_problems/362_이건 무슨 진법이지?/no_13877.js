const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

for (let el of input) {
  const answer = [];
  const [index, numStr] = el.split(" ");
  answer.push(index);
  let num = Number(numStr);
  let oct = parseInt(num, 8).toString(10);
  let ten = parseInt(num, 10).toString(10);
  let hex = parseInt(num, 16).toString(10);
  if (isNaN(oct) || /[89]/.test(String(num))) oct = 0;
  answer.push(oct, ten, hex);
  result.push(answer.join(" "));
}

console.log(result.join("\n"));
