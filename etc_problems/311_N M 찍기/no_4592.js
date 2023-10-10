const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let result = "";

for (let i = 1; i <= n * m; i = i + m) {
  const tmp = [];
  for (let j = 0; j < m; j++) {
    tmp.push(i + j);
  }

  result += tmp.join(" ") + "\n";
}

console.log(result);
