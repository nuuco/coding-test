const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const num = Number(input);

const side = Math.floor(Math.sqrt(num));

console.log(`The largest square has side length ${side}.`);
