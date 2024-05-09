const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b, c] = fs.readFileSync(filePath).toString().trim().split("\n");

const answer1 = Number(a) + Number(b) - Number(c);
const answer2 = Number(a + b) - Number(c);

console.log(`${answer1}\n${answer2}`);
