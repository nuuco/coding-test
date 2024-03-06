const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

let str = "";

for (let el of t) {
  if (!/\d/.test(el)) {
    str += el;
  }
}

// console.log(str);
if (str.indexOf(input) !== -1) {
  console.log(1);
} else {
  console.log(0);
}
