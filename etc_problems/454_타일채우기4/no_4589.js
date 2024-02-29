const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(BigInt);

let result = BigInt(0);
if ((n * m) % BigInt(2) === BigInt(0)) {
  result = (n * m) / BigInt(2);
} else {
  result = (n * m - BigInt(1)) / BigInt(2);
}

console.log(result.toString());
