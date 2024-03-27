const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

if (/^".+"$/.test(input)) {
  const str = input.slice(1, -1);
  console.log(str);
} else {
  console.log("CE");
}
