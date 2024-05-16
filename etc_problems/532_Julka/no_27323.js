const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().trim().split("\n").map(BigInt);

const answer = (a - b) / BigInt(2);

console.log(`${answer + b}\n${answer}`);
