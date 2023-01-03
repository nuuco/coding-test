const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

let totalCount = 0;
let oneCount = 0;

let prev = "";

for (let el of input) {
  if (prev !== el) {
    if (el === "1") oneCount++;
    totalCount++;
    prev = el;
  }
}

const zeroCount = totalCount - oneCount;
const result = oneCount < zeroCount ? oneCount : zeroCount;
console.log(result);
