const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const arr = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
arr.pop();

const result = [];

for (let el of arr) {
  let divSum = 0;
  const div = [];

  for (let i = 1; i < el; i++) {
    if (el % i === 0) {
      divSum += i;
      div.push(i);
    }
  }

  let text = "";
  if (divSum === el) {
    text = `${el} = ${div.join(" + ")}`;
  } else {
    text = `${el} is NOT perfect.`;
  }

  result.push(text);
}

console.log(result.join("\n"));
