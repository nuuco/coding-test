const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = t.split(" ").map(Number);

const arr = [];

for (let el of input) {
  arr.push(el.split("").map(Number));
}

let maxWidth = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    let tmpNum = arr[i][j];
    const hasSameNumArr = [];
    arr[i].forEach((el, idx) => {
      if (idx <= j + maxWidth) return;
      else if (el === tmpNum) {
        const diff = idx - j;
        hasSameNumArr.push(diff);
      }
    });

    for (let el of hasSameNumArr) {
      if (i + el >= arr.length || j + el >= arr[i].length) break;
      if (arr[i + el][j] === tmpNum && arr[i + el][j + el] === tmpNum) {
        if (el > maxWidth) {
          maxWidth = el;
        }
      }
    }
  }
}

console.log((maxWidth + 1) ** 2);
