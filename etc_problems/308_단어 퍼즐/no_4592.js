const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();
input.pop();

const result = [];

let i = 1;
while (input.length > 0) {
  let [a, b] = input.splice(0, 2);
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  if (a === b) {
    result.push(`Case ${i}: same`);
  } else {
    result.push(`Case ${i}: different`);
  }
  i++;
}

console.log(result.join("\n"));
