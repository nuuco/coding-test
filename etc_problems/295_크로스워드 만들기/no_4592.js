const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ");

let x = -1; //몇 번째 칸에 b 단어가 나타날지.
let y = -1; //몇 번째 줄에 a 단어가 나타날지.

for (let i = 0; i < a.length; i++) {
  const tmp = b.indexOf(a[i]);
  if (tmp !== -1) {
    x = i;
    y = tmp;
    break;
  }
}

const result = [];
for (let i = 0; i < b.length; i++) {
  let str = ".".repeat(x) + b[i] + ".".repeat(a.length - x - 1);
  if (i === y) {
    str = a;
  }
  result.push(str);
}

console.log(result.join("\n"));
