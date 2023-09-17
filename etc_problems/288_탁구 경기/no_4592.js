const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let d = 0;
let p = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "D") {
    d++;
  } else {
    p++;
  }

  if (Math.abs(d - p) >= 2) {
    break;
  }
}

console.log(`${d}:${p}`);
