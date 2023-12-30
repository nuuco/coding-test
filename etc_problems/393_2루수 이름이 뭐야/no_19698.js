const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let result = "뭐야?";

for (let el of input) {
  if (el === "anj") {
    result = "뭐야;";
    break;
  }
}

console.log(result);
