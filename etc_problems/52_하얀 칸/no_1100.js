const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
let count = 0;
for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) {
    //짝수 인덱스가 흰칸
    for (let j = 0; j < input[i].length; j += 2) {
      if (input[i][j] === "F") count++;
    }
  } else {
    //홀수 인덱스가 흰칸
    for (let j = 1; j < input[i].length; j += 2) {
      if (input[i][j] === "F") count++;
    }
  }
}
console.log(count);
