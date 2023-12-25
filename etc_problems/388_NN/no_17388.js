const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ");

const numN = Number(n);
const numM = Number(m);

const answer = n.repeat(numN).slice(0, numM);

console.log(answer);
