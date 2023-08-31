const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [aStr, bStr] = fs.readFileSync(filePath).toString().trim().split("\n");

let [powerA, hpA] = aStr.split(" ").map(Number);
let [powerB, hpB] = bStr.split(" ").map(Number);

while (hpA > 0 && hpB > 0) {
  hpA -= powerB;
  hpB -= powerA;
}

if (hpA <= 0 && hpB > 0) {
  console.log("PLAYER B");
} else if (hpB <= 0 && hpA > 0) {
  console.log("PLAYER A");
} else {
  console.log("DRAW");
}
