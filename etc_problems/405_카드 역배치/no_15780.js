const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = [];
for (let i = 1; i <= 20; i++) {
  arr.push(i);
}

for (let el of input) {
  const [start, end] = el.split(" ").map(Number);
  const newArr = [...arr.slice(0, start - 1), ...arr.slice(start - 1, end).reverse(), ...arr.slice(end)];
  arr = newArr;
}

console.log(arr.join(" "));
