const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [n, l] = fs.readFileSync(filePath).toString().trim().split(" ");

let count = 0;
let max = -1;
let i = 1;

while (count < Number(n)) {
  let strNum = String(i);
  const regex = new RegExp(l, "g");
  if (!regex.test(strNum)) {
    count++;
    if (count === Number(n)) {
      max = i;
    }
  }
  i++;
}

console.log(max);
