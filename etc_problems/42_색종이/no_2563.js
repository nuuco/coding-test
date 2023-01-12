const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...arrStr] = fs.readFileSync(filePath).toString().trim().split("\n");

//검은 종이 배열
const paperArr = arrStr.map((el) => el.split(" ").map(Number));

//흰 도화지
const whitePaper = new Array(101);
//whitePaper[x축][y축]
for (let i = 0; i < whitePaper.length; i++) {
  whitePaper[i] = new Array(101).fill(false);
}

let count = 0;
for (let el of paperArr) {
  const [x, y] = el;
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      if (!whitePaper[i][j]) {
        whitePaper[i][j] = true;
        count++;
      }
    }
  }
}
console.log(count);
