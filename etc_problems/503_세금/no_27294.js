const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const num = Number(input);

const a = num * 0.78;
const cost = num * 0.2;
const b = num * 0.8 + cost * 0.78;

console.log(`${a} ${b}`);
