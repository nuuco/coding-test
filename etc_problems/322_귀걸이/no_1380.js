const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

let i = 1;

while (input[0] !== "0") {
  const n = Number(input.shift());
  const names = input.splice(0, n);
  const arr = new Array(n).fill(false);

  while (input[0].split(" ").length === 2) {
    let [idx, sign] = input.shift().split(" ");
    idx = Number(idx);
    if (!arr[idx - 1]) {
      arr[idx - 1] = sign;
    } else if (arr[idx - 1] !== sign) {
      arr[idx - 1] = "C";
    }
  }

  let targetIdx;
  arr.forEach((el, idx) => {
    if (el === "A" || el === "B") {
      targetIdx = idx;
    }
  });
  result.push(`${i} ${names[targetIdx]}`);
  i++;
}

console.log(result.join("\n"));
