const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ");

const result = [];

a = a.split("").reverse().map(Number);
b = b.split("").reverse().map(Number);

let maxWordLength;
let minWordLength;

if (a.length < b.length) {
  maxWordLength = b.length;
  minWordLength = a.length;
} else {
  maxWordLength = a.length;
  minWordLength = b.length;
}

for (let i = 0; i < maxWordLength; i++) {
  if (i < minWordLength) {
    result.push(a[i] + b[i]);
  } else if (a.length === maxWordLength) {
    result.push(a[i]);
  } else {
    result.push(b[i]);
  }
}

console.log(result.reverse().join(""));
