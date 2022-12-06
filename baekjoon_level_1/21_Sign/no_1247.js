const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const nums = fs.readFileSync(filePath).toString().trim().split("\n");

const numArr = [];

while (nums.length > 0) {
  const tmp = Number(nums.shift());
  numArr.push(nums.splice(0, tmp));
}

const result = [];
for (let i = 0; i < numArr.length; i++) {
  const tmp = numArr[i].reduce((acc, cur) => acc + BigInt(cur), BigInt(0));
  let answer = "0";
  if (tmp < BigInt(0)) {
    answer = "-";
  } else if (tmp > BigInt(0)) {
    answer = "+";
  }
  result.push(answer);
}

console.log(result.join("\n"));
