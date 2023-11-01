const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

const answer = n.toString(9);

console.log(answer);
