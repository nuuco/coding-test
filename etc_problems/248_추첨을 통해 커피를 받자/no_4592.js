const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const maxScore = [100, 100, 200, 200, 300, 300, 400, 400, 500];
let sum = 0;
let result = "";

for(let i = 0; i < input.length; i++) {
  if(input[i] > maxScore[i]) {
    result = "hacker";
    break;
  }

  sum += input[i];
}

if(result !== "hacker") {
  if(sum >= 100) {
    result = "draw";
  } else {
    result = "none";
  }
}

console.log(result);
