const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const num = t.split(" ").map(Number)[0];
const result = new Array(num).fill(0).map((el, idx) => idx + 1);

for (let el of input) {
  let [i, j] = el.split(" ").map(Number);
  i -= 1;
  j -= 1;
  const diff = j - i;
  const max = Math.ceil(diff / 2);
  for (let x = i; x < i + max; x++) {
    [result[x], result[i + j - x]] = [result[i + j - x], result[x]];
  }
}

console.log(result.join(" "));
