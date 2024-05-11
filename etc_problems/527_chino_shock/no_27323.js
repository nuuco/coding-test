const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const len = input.length;
const underBarArr = input.match(/_/g);
const underBarCnt = Array.isArray(underBarArr) ? underBarArr.length : 0;
const answer = len + 2 + underBarCnt * 5;

console.log(answer);
