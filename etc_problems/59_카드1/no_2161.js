const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = Number(fs.readFileSync(filePath).toString().trim());

/**나이브한 풀이 */
const arr = [];
for (let i = 1; i <= input; i++) {
  arr.push(i);
}

const result = [];
while (arr.length > 0) {
  result.push(arr.shift());
  if (arr.length > 0) {
    arr.push(arr.shift());
  }
}

console.log(result.join(" "));
