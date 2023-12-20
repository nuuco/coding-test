const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let left = n;
let result = n;

let tmp = Math.floor(left / m);
while (tmp > 0) {
  result += tmp;
  left = tmp;
  tmp = Math.floor(left / m);
}

console.log(result);
