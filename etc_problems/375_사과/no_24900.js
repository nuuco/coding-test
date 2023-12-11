const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let result = 0;
for (let el of input) {
  const [students, apples] = el.split(" ").map(Number);
  result += apples % students;
}

console.log(result);
