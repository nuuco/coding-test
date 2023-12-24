const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const answer1 = parseInt((a * b) / c);
const answer2 = parseInt((a / b) * c);
const result = answer1 < answer2 ? answer2 : answer1;

console.log(result);
