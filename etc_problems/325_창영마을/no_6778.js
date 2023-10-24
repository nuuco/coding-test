const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("");

const arr = [true, false, false];

for (let char of input) {
  switch (char) {
    case "A":
      [arr[0], arr[1]] = [arr[1], arr[0]];
      break;
    case "B":
      [arr[1], arr[2]] = [arr[2], arr[1]];
      break;
    case "C":
      [arr[0], arr[2]] = [arr[2], arr[0]];
      break;
  }
}

if (arr[0]) {
  console.log(1);
} else if (arr[1]) {
  console.log(2);
} else {
  console.log(3);
}
