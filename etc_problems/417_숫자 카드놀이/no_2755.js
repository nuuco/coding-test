const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const result = [];

for (let el of input) {
  const answer = [el];
  let num = el;
  while (num.length > 1) {
    let mul = 1;
    for (let i = 0; i < num.length; i++) {
      mul *= Number(num[i]);
    }

    answer.push(mul);
    num = String(mul);
  }
  result.push(answer.join(" "));
}

console.log(result.join("\n"));
