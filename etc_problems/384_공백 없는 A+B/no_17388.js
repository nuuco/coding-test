const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
let a;
let b;

if (input.length === 2) {
  a = input[0];
  b = input[1];
} else if (input.length === 3) {
  if (input[1] == "0") {
    a = input.slice(0, 2);
    b = input[2];
  } else {
    a = input[0];
    b = input.slice(1);
  }
} else {
  a = 10;
  b = 10;
}

a = Number(a);
b = Number(b);
const answer = a + b;
console.log(answer);
