const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

const result = [];
for (let i = 1; i <= 2 * n - 1; i++) {
  let str = "";
  if (i === 1 || i === 2 * n - 1) {
    str = "*".repeat(n) + " ".repeat((n - 2) * 2 + 1) + "*".repeat(n);
  } else if (i > 1 && i <= n - 1) {
    str =
      " ".repeat(i - 1) +
      "*" +
      " ".repeat(n - 2) +
      "*" +
      " ".repeat((n - i - 1) * 2 + 1) +
      "*" +
      " ".repeat(n - 2) +
      "*";
  } else if (i === n) {
    str = " ".repeat(n - 1) + "*" + " ".repeat(n - 2) + "*" + " ".repeat(n - 2) + "*";
  } else if (i > n) {
    const tmp = 2 * n - i - 1;
    str =
      " ".repeat(tmp) + "*" + " ".repeat(n - 2) + "*" + " ".repeat((i - n - 1) * 2 + 1) + "*" + " ".repeat(n - 2) + "*";
  }
  result.push(str);
}

console.log(result.join("\n"));
