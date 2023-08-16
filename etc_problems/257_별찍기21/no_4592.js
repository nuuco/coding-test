const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

const result = [];

for(let i = 0; i < 2 * n; i++) {
  let tmp = "";
  if(i % 2 === 0) {
    tmp = "* ".repeat(Math.floor(n / 2));
    if(n % 2 === 1) tmp += "*";
  } else {
    tmp = " *".repeat(Math.floor(n / 2));
  }
  result.push(tmp);
}
console.log(result.join('\n'));
