const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = t.split(" ").map(Number);

const setArr = [...new Set(input)];
const arr = [];

for (let i = 0; i < setArr.length; i++) {
  arr.push([...setArr[i].split(" ").map(Number)]);
}

const sortedArr = arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return b[0] - a[0];
  }

  if (a[1] !== b[1]) {
    return b[1] - a[1];
  }

  if (a[2] !== b[2]) {
    return b[2] - a[2];
  }

  if (a[3] !== b[3]) {
    return b[3] - a[3];
  }

  return 0;
});

console.log(sortedArr)

for (let i = 0; i < sortedArr.length; i++) {
  if (input[k - 1] === sortedArr[i].join(" ")) {
    console.log(i + 1);
    break;
  }
}
