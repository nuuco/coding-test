const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
let num = Number(input);
let result = 0;

while(num >= 1) {
  if(num === 1) {
    result = 1;
    break;
  }

  if(num % 2 !== 0) {
    result = 0;
    break;
  }

  num = num / 2;
}


console.log(result);