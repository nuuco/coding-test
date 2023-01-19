const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const arr = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

// 도는 A, 개는 B, 걸은 C, 윷은 D, 모는 E
for (let el of arr) {
  const count = el.split(" ").filter((el) => el === "0").length;
  let word = "";
  switch (count) {
    case 0:
      word = "E";
      break;
    case 1:
      word = "A";
      break;
    case 2:
      word = "B";
      break;
    case 3:
      word = "C";
      break;
    case 4:
      word = "D";
      break;
  }

  result.push(word);
}

console.log(result.join("\n"));
