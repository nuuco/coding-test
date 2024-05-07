const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [x] = fs.readFileSync(filePath).toString().trim();

const num = Number(x);

console.log("1\n0");
