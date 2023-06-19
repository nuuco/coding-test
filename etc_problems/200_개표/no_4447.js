const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

let aCnt = 0;
let bCnt = 0;

for(let el of input) {
  if(el === "A") {
    aCnt++;
  } else {
    bCnt++;
  }
}
if(aCnt > bCnt) {
  console.log("A");
} else if(aCnt < bCnt) {
  console.log("B");
} else {
  console.log("Tie");
}
