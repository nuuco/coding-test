const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, name] = fs.readFileSync(filePath).toString().trim().split("\n");

let sum = 0;

for(let char of name) {
  sum += char.charCodeAt(0) - 64;
}

console.log(sum);