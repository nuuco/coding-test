const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, open] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

if (n >= 6) {
  console.log("Love is open door");
} else {
  const result = [open];
  for (let i = 1; i < n; i++) {
    if (result[i - 1] === 0) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  result.shift();
  console.log(result.join("\n"));
}
