const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [k, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];
for (let i = 0; i < input.length; i++) {
  const tmp = input[i].split(" ").reverse().join(" ");
  result.push(`Case #${i + 1}: ${tmp}`);
}

console.log(result.join("\n"));

