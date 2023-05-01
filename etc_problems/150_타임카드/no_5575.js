const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];
for (let el of input) {
  let [h1, m1, s1, h2, m2, s2] = el.split(" ").map(Number);

  let h = 0;
  let m = 0;
  let s = 0;
  if (s2 - s1 < 0) {
    m2 -= 1;
    s = 60 + (s2 - s1);
  } else {
    s = s2 - s1;
  }

  if (m2 - m1 < 0) {
    h2 -= 1;
    m = 60 + (m2 - m1);
  } else {
    m = m2 - m1;
  }

  h = h2 - h1;

  result.push(`${h} ${m} ${s}`);
}

console.log(result.join("\n"));
