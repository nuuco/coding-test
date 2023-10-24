const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, e] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const result = [];
if (a >= 3 && e <= 4) {
  result.push("TroyMartian");
}
if (a <= 6 && e >= 2) {
  result.push("VladSaturnian");
}
if (a <= 2 && e <= 3) {
  result.push("GraemeMercurian");
}

console.log(result.join("\n"));
