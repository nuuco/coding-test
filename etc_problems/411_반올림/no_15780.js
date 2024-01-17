const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

let result = "";
if (input.length >= 2) {
  let numStr = input[input.length - 1];
  let isUp = false;
  for (let i = input.length - 1; i >= 0; i--) {
    const tmp = isUp ? Number(input[i]) + 1 : Number(input[i]);
    if (i === 0) {
      numStr = tmp + numStr;
    } else if (Number(tmp) >= 5) {
      isUp = true;
      numStr = "0".repeat(input.length - i);
    } else {
      isUp = false;
      numStr = "0".repeat(input.length - i);
    }
  }

  result = numStr;
} else {
  result = input;
}

console.log(result);
