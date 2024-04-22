const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

for (let el of input) {
  if (el.includes("S")) {
    console.log(el);
    break;
  }
}
