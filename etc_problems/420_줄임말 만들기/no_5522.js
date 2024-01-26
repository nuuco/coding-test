const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(" ");

const exclude = ["i", "pa", "te", "ni", "niti", "a", "ali", "nego", "no", "ili"];

const arr = input.filter((el, idx) => idx === 0 || !exclude.includes(el));

let alias = "";

for (let word of arr) {
  alias += word[0].toUpperCase();
}

console.log(alias);
