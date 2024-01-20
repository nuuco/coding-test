const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = t.split(" ").map(Number);

if (n === 0) console.log(0);
else {
  const arr = input.split(" ").map(Number);

  let count = 0;
  let box = 0;

  for (let el of arr) {
    if (box + el > m) {
      count++;
      box = el;
    } else {
      box += el;
    }
  }

  if (box > 0) {
    count++;
  }

  console.log(count);
}
