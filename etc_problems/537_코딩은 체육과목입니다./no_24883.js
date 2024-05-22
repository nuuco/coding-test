const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const num = Number(input);

const repeatNum = num / 4;
const answer = "long ".repeat(repeatNum) + "int";

console.log(answer);
