const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, w, h, l] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")

  .map(Number);

const max = Math.floor(w / l) * Math.floor(h / l);

const answer = max < n ? max : n;

console.log(answer);
