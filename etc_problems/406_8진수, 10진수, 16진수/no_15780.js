const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

if (input.slice(0, 2) === "0x") {
  console.log(parseInt(input, 16));
} else if (input.slice(0, 1) === "0") {
  console.log(parseInt(input, 8));
} else {
  console.log(input);
}
