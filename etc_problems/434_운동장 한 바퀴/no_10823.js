const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [c, d] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let result = c * 2;
result += d * 2 * 3.141592;

console.log(result);
