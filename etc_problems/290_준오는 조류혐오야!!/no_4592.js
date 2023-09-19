const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = new Array(input.length);
for (let i = 0; i < input.length; i++) {
  arr[i] = input[i].split(" ").map((el) => el.match(/(9)/g)?.length || 0);
}

let allSum = 0;
let max = 0;
//각 행 합
for (let el of arr) {
  const tmp = el.reduce((acc, cur) => acc + cur, 0);
  allSum += tmp;
  if (max < tmp) {
    max = tmp;
  }
}
//각 열 합
for (let i = 0; i < arr[0].length; i++) {
  let tmp = 0;
  for (let j = 0; j < arr.length; j++) {
    tmp += arr[j][i];
  }
  if (max < tmp) {
    max = tmp;
  }
}

console.log(allSum - max);
