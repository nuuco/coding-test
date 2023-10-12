const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let n = fs.readFileSync(filePath).toString().trim();
n = Number(n);

if (n % 2 === 1) {
  console.log(0);
} else {
  const tmp = n / 2;
  if (tmp % 2 === 1) {
    console.log(1);
  } else {
    console.log(2);
  }
}
