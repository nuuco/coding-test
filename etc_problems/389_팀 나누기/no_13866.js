const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b, c, d] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

const team1 = a + d;
const team2 = b + c;

const answer = Math.abs(team1 - team2);

console.log(answer);
