const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n\n");

const result = [];

for (let el of input) {
  const [n, ...arr] = el.split("\n").map(BigInt);

  let left = BigInt(0);
  for (let num of arr) {
    let tmp = num % n;
    left = (left + tmp) % n;
  }

  if (left == BigInt(0)) {
    result.push("YES");
  } else {
    result.push("NO");
  }
}

console.log(result.join("\n"));
