const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let result = "";
for (let i = 0; i < input.length; i++) {
  if (input[i].includes("w")) {
    result = "chunbae";
    break;
  }
  if (input[i].includes("b")) {
    result = "nabi";
    break;
  }
  if (input[i].includes("g")) {
    result = "yeongcheol";
    break;
  }
}

console.log(result);
