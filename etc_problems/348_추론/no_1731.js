const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

//등차인가?
const first = input[0];
const diff = input[1] - input[0];

const isAP = input.every((el, idx) => el === first + idx * diff);

if (isAP) {
  console.log(input[input.length - 1] + diff);
} else {
  const share = input[1] / input[0];
  console.log(input[input.length - 1] * share);
}
