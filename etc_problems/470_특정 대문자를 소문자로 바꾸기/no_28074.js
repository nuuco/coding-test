const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [input, t] = fs.readFileSync(filePath).toString().trim().split("\n");

const capitals = t.split(" ");
let result = "";
for (let char of input) {
  if (capitals.includes(char)) {
    result += char.toLowerCase();
  } else {
    result += char;
  }
}

console.log(result);
