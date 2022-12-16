const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const arr = [];
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "X") {
      count++;
    } else {
      if (count !== 0) {
        arr.push(count);
      }
      count = 0;
      arr.push(input[i]);
    }
  }
  if (count !== 0) {
    arr.push(count);
  }

  let result = "";
  for (let el of arr) {
    if (typeof el === "number") {
      let num = el;
      if (num % 2 !== 0) return -1;
      const tmp = parseInt(num / 4) * 4;
      const rest = num % 4;
      result += "A".repeat(tmp) + "B".repeat(rest);
    } else {
      result += el;
    }
  }

  return result;
};

console.log(solution(input));
