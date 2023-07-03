const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const result = [];

for(let el of input) {
  const answer = (el * 0.8).toFixed(2);

  result.push("$" + answer);
}

console.log(result.join('\n'));