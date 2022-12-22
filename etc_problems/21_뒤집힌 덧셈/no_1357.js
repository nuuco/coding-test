const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [x, y] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const rev = (num) => {
  const tmp = Number(num.toString().split("").reverse().join(""));
  return tmp;
};

console.log(rev(rev(x) + rev(y)));
