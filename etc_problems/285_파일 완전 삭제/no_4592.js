const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, a, b] = fs.readFileSync(filePath).toString().trim().split("\n");
const count = Number(n);
let isSuccess = false;
if (n % 2 === 0) {
  if (a === b) isSuccess = true;
} else {
  const tmp = a
    .split("")
    .map((el) => (el === "0" ? "1" : "0"))
    .join("");
  if (tmp === b) isSuccess = true;
}

if (isSuccess) {
  console.log("Deletion succeeded");
} else {
  console.log("Deletion failed");
}
