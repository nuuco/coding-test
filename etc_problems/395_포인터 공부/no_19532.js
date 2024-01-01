const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

const result = ["int a;"];
for (let i = 1; i <= n; i++) {
  if (i === 1) {
    result.push("int *ptr = &a;");
  } else if (i === 2) {
    result.push("int **ptr2 = &ptr;");
  } else {
    result.push(`int ${"*".repeat(i)}ptr${i} = &ptr${i - 1};`);
  }
}

console.log(result.join("\n"));
