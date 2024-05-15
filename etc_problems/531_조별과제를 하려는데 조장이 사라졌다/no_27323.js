const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const num = Number(input);

const answer = Math.ceil(num / 5);

console.log(answer);
