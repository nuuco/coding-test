const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

const result = [];
let i = 0;
for (let el of input) {
  i++;
  const [r, w, l] = el.split(" ").map(Number);
  const diagonal = Math.sqrt(w ** 2 + l ** 2);

  if (2 * r >= diagonal) {
    result.push(`Pizza ${i} fits on the table.`);
  } else {
    result.push(`Pizza ${i} does not fit on the table.`);
  }
}

console.log(result.join("\n"));
