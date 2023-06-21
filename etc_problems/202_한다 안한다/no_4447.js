const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

for (let el of input) {
  let i = el.length / 2 - 1;

  if (el[i] === el[i + 1]) {
    result.push("Do-it");
  } else {
    result.push("Do-it-Not");
  }
}

console.log(result.join("\n"));
