const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [s, m, l] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let answer = s + 2 * m + 3 * l;
let result = "sad";
if (answer >= 10) {
  result = "happy";
}
console.log(result);
