const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
const num = Number(input);

if (num % 10 !== 0) {
  console.log(-1);
} else {
  let left = num;
  let aCount = 0; //300
  let bCount = 0; //60
  let cCount = 0; //10
  aCount = Math.floor(left / 300);
  left = left % 300;
  bCount = Math.floor(left / 60);
  left = left % 60;
  cCount = Math.floor(left / 10);

  console.log(`${aCount} ${bCount} ${cCount}`);
}
