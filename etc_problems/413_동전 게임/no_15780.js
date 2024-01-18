const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = ["TTT", "TTH", "THT", "THH", "HTT", "HTH", "HHT", "HHH"];

const result = [];

for (let str of input) {
  let patternCountArr = [];
  for (let pattern of arr) {
    let count = 0;
    for (let i = 0; i < str.length - 2; i++) {
      if (str[i] + str[i + 1] + str[i + 2] === pattern) {
        count++;
      }
    }
    patternCountArr.push(count);
  }
  result.push(patternCountArr.join(" "));
}

console.log(result.join("\n"));
