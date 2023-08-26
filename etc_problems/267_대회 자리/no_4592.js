const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];
while (input.length > 0) {
  const [num, s] = input.shift().split(" ").map(Number);
  const testCase = input.splice(0, num);
  let count = 0;
  const seat = new Array(s + 1).fill(true);
  for (let el of testCase) {
    if (seat[Number(el)]) {
      seat[Number(el)] = false;
    } else {
      count++;
    }
  }

  result.push(count);
}

console.log(result.join("\n"));
