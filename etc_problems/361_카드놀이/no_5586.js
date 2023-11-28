const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [aList, bList] = fs.readFileSync(filePath).toString().trim().split("\n");

const aArr = aList.split(" ").map(Number);
const bArr = bList.split(" ").map(Number);
let aScore = 0;
let bScore = 0;

let lastWinner = "D";

for (let i = 0; i < aArr.length; i++) {
  if (aArr[i] < bArr[i]) {
    bScore += 3;
    lastWinner = "B";
  } else if (aArr[i] > bArr[i]) {
    aScore += 3;
    lastWinner = "A";
  } else {
    aScore += 1;
    bScore += 1;
  }
}

console.log(`${aScore} ${bScore}`);
if (aScore > bScore) {
  console.log("A");
} else if (aScore < bScore) {
  console.log("B");
} else {
  console.log(lastWinner);
}
