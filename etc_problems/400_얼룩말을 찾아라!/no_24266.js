const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let max = 0;
const arr = [];
for (let el of input) {
  const count = el.split(/0+/g).filter((el) => el !== "").length;
  arr.push(count);
  if (max < count) {
    max = count;
  }
}

const maxCount = arr.filter((el) => el === max).length;

console.log(max + " " + maxCount);
