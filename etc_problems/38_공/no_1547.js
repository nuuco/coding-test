const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");
const cups = {
  1: true,
  2: false,
  3: false,
};

for (let el of arr) {
  const [x, y] = el.split(" ");

  const tmp = cups[x];
  cups[x] = cups[y];
  cups[y] = tmp;
}

let result = 1;
for (let idx in cups) {
  if (cups[idx]) {
    result = idx;
    break;
  }
}

console.log(result);
