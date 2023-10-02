const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let arr = [];
let i = 1;
while (arr.length <= b) {
  for (let j = 0; j < i; j++) {
    arr.push(i);
  }
  i++;
}

const some = arr.splice(a - 1, b - a + 1);
const result = some.reduce((acc, cur) => acc + cur, 0);

console.log(result);
