const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const result = [];

for(let el of input) {
  let arr = el.split('').map(Number);

  while(arr.length > 1) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    arr = String(sum).split('').map(Number);
  }

  result.push(arr[0]);
}

console.log(result.join("\n"));
