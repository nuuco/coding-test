const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, str] = fs.readFileSync(filePath).toString().trim().split("\n");
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "S") {
    count++;
  } else if (str[i] === "L") {
    i++;
    count++;
  }
}

count++;
if (str.length < count) {
  console.log(str.length);
} else {
  console.log(count);
}
