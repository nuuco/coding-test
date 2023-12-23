const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [arr1, arr2] = fs.readFileSync(filePath).toString().trim().split("\n");

const [a, b] = arr1.split(" ").map(Number);
const [c, d] = arr2.split(" ").map(Number);

const result = a + d < b + c ? a + d : b + c;

console.log(result);
