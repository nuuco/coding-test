const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let result = "Good";
for(let i = 1; i < input.length; i++) {
  if(input[i - 1] > input[i]) {
    result = "Bad";
    break;
  }
}

console.log(result);