const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [s, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

for (let el of input) {
  const [a, b] = el.split(" ");

  const aStr = a.split("").sort().join("");
  const bStr = b.split("").sort().join("");

  if (aStr === bStr) {
    result.push("Possible");
  } else {
    result.push("Impossible");
  }
}

console.log(result.join("\n"));
