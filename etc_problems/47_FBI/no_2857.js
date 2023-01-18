const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const regex = /FBI/;
const result = [];
for (let i = 0; i < input.length; i++) {
  if (regex.test(input[i])) {
    result.push(i + 1);
  }
}

if (result.length > 0) {
  console.log(result.join(" "));
} else {
  console.log("HE GOT AWAY!");
}
