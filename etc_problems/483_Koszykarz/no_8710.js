const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(t);
const [a, b, c] = input.split(" ").map(Number);

let sum = 0;
sum += a >= n ? n : a;
sum += b >= n ? n : b;
sum += c >= n ? n : c;

console.log(sum);
