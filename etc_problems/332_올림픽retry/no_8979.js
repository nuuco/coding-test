const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = t.split(" ").map(Number);

const arr = [];
let target = "";

for (let i = 0; i < input.length; i++) {
  const tmp = [...input[i].split(" ").map(Number)];
  arr.push(tmp);
  if (tmp[0] === k) {
    target = tmp.slice(1).join(" ");
  }
}

const sortedArr = arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  }

  if (a[2] !== b[2]) {
    return b[2] - a[2];
  }

  if (a[3] !== b[3]) {
    return b[3] - a[3];
  }

  if (a[4] !== b[4]) {
    return b[4] - a[4];
  }

  return a[0] - b[0];
});

let i = -1;
let sameCnt = 0;

arr.some((el, idx) => {
  if (el[0] === k) {
    i = idx;
    return true;
  } else if (el.slice(1).join(" ") === target) {
    sameCnt++;
  }
  return false;
});

const rank = i + 1 - sameCnt;

console.log(rank);
