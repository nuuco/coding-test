const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().trim().split("\n");

const [aNum, P1] = a.split(" ").map(Number);
const [r, P2] = b.split(" ").map(Number);
const rNum = r ** 2 * Math.PI;

const aPerCost = aNum / P1;
const bPerCost = rNum / P2;

// console.log(aNum, aPerCost, rNum, bPerCost);

if (aPerCost > bPerCost) {
  console.log("Slice of pizza");
} else {
  console.log("Whole pizza");
}
