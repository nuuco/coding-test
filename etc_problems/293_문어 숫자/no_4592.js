const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

const switchCharacterToNumber = (char) => {
  let num;
  switch (char) {
    case "-":
      num = 0;
      break;
    case "\\":
      num = 1;
      break;
    case "(":
      num = 2;
      break;
    case "@":
      num = 3;
      break;
    case "?":
      num = 4;
      break;
    case ">":
      num = 5;
      break;
    case "&":
      num = 6;
      break;
    case "%":
      num = 7;
      break;
    case "/":
      num = -1;
      break;
    default:
      break;
  }

  return num;
};

const result = [];

for (let el of input) {
  const arr = el.split("").reverse();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const eight = 8 ** i;
    const num = switchCharacterToNumber(arr[i]);
    sum += num * eight;
  }
  result.push(sum);
}

console.log(result.join("\n"));