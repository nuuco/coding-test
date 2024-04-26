const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [s, a] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const min = s < a ? s : a;

const answer = Math.floor(min / 2);

console.log(answer);
