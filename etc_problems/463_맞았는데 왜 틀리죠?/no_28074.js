const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = t.split(" ").map(Number);

const sample = input.splice(0, n);
const system = input;

let answer = "Accepted";

for (let test of sample) {
  const [a, b] = test.split(" ");
  if (a !== b) {
    answer = "Wrong Answer";
    break;
  }
}

if (answer !== "Wrong Answer") {
  for (let test of system) {
    const [a, b] = test.split(" ");
    if (a !== b) {
      answer = "Why Wrong!!!";
      break;
    }
  }
}

console.log(answer);
