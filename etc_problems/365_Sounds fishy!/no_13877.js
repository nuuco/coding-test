const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
let isConstant = new Set(input).size === 1;
let isNoFish = input[0] === input[1];
let isAsc = input[0] < input[1];
if (isConstant) {
  console.log("Fish At Constant Depth");
} else if (isNoFish) {
  console.log("No Fish");
} else if (isAsc) {
  let isSuccess = input.every((el, idx, arr) => {
    if (idx === 0) {
      return true;
    }
    return arr[idx - 1] < el;
  });
  if (isSuccess) {
    console.log("Fish Rising");
  } else {
    console.log("No Fish");
  }
} else {
  let isSuccess = input.every((el, idx, arr) => {
    if (idx === 0) {
      return true;
    }
    return arr[idx - 1] > el;
  });
  if (isSuccess) {
    console.log("Fish Diving");
  } else {
    console.log("No Fish");
  }
}
