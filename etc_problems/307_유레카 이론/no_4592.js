const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const generateTriangularNumbers = (max) => {
  const arr = [1];
  let i = 2;

  while (arr[arr.length - 1] <= max) {
    arr.push(arr[arr.length - 1] + i);
    i++;
  }

  return arr;
};

const isSumOfThreeTriangularNumbers = (num, triangularNumbers) => {
  for (let i = 0; i < triangularNumbers.length; i++) {
    for (let j = i; j < triangularNumbers.length; j++) {
      for (let k = j; k < triangularNumbers.length; k++) {
        if (triangularNumbers[i] + triangularNumbers[j] + triangularNumbers[k] === num) {
          return true;
        }
      }
    }
  }
  return false;
};

const max = Math.max(...input);
const triangularNumbers = generateTriangularNumbers(max);

const result = [];

for (let num of input) {
  if (isSumOfThreeTriangularNumbers(num, triangularNumbers)) {
    result.push(1);
  } else {
    result.push(0);
  }
}

console.log(result.join("\n"));
