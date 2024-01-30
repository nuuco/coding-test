const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];
for (let el of input) {
  const [first, ...elseName] = el.split(" ");
  const newName = "god" + elseName.join("");

  result.push(newName);
}

console.log(result.join("\n"));
