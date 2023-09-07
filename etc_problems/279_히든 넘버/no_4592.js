const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const regex = /(\d+)/g;
const result = input.match(regex);
if (result) {
  const answer = result.map(BigInt).reduce((acc, cur) => acc + cur, BigInt(0));
  console.log(answer.toString());
} else {
  console.log(0);
}
