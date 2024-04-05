const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
const num = Number(input)

const answer = num - 1946

console.log(answer)