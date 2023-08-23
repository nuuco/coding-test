const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const num = Number(input);

let str = "";

for(let i = 1; i <= num; i++) {
  str += i;
}

const regex = new RegExp(input);
const result = str.match(regex);
console.log(result.index + 1);