const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

let m = input.indexOf("M") !== -1;
let o = input.indexOf("O") !== -1;
let b = input.indexOf("B") !== -1;
let i = input.indexOf("I") !== -1;
let s = input.indexOf("S") !== -1;

if (m && o && b && i && s) {
  console.log("YES");
} else {
  console.log("NO");
}
