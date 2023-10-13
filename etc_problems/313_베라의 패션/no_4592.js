const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let n = Number(fs.readFileSync(filePath).toString().trim());

console.log(n * (n - 1));
