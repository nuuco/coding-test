const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, s] = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(s.slice(-5));
