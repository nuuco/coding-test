const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

let str = [];
const result = [];

while (input.length > 0) {
  const n = Number(input.shift());
  str = input.splice(0, n);

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const subStr = str[i].slice(count);
    const idx = subStr.indexOf(" ");
    if (idx === -1) {
      count += subStr.length;
    } else {
      count += idx;
    }
  }
  count++;
  result.push(count);
}

console.log(result.join("\n"));
