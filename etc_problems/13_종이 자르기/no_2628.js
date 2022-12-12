const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [paperX, paperY] = input[0].split(" ").map(Number);
const widthSlice = [paperX];
const heightSlice = [paperY];
for (let i = 2; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  if (x === 1) {
    widthSlice.push(y);
  } else {
    heightSlice.push(y);
  }
}
widthSlice.sort((a, b) => a - b);
heightSlice.sort((a, b) => a - b);
//console.log(widthSlice, heightSlice);

let maxX = widthSlice[0];
let maxY = heightSlice[0];

for (let i = 1; i < widthSlice.length; i++) {
  const tmp = widthSlice[i] - widthSlice[i - 1];
  maxX = maxX < tmp ? tmp : maxX;
}

for (let i = 1; i < heightSlice.length; i++) {
  const tmp = heightSlice[i] - heightSlice[i - 1];
  maxY = maxY < tmp ? tmp : maxY;
}
console.log(maxX * maxY);
