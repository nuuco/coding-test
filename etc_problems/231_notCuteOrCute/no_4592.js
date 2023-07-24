const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('/n').map(Number);

let notCuteCnt = input.filter(el => el === 0).length;
let cuteCnt = input.length - notCuteCnt;

if(notCuteCnt < cuteCnt) {
  console.log("Junhee is cute!");
} else {
  console.log("Junhee is not cute!")
}