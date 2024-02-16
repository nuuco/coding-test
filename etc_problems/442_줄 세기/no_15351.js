const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

if (input[input.length - 1] === "") {
  console.log(input.length - 1);
} else {
  console.log(input.length);
}
