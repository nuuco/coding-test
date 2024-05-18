const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const answer = /[nN]/.test(input) ? "Naver D2" : "Naver Whale";
console.log(answer);
