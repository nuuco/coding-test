const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const arr = ["small", null, null, "big"];

const swap = (char, arr) => {
  switch (char) {
    case "A":
      [arr[0], arr[1]] = [arr[1], arr[0]];
      break;
    case "B":
      [arr[0], arr[2]] = [arr[2], arr[0]];
      break;
    case "C":
      [arr[0], arr[3]] = [arr[3], arr[0]];
      break;
    case "D":
      [arr[1], arr[2]] = [arr[2], arr[1]];
      break;
    case "E":
      [arr[1], arr[3]] = [arr[3], arr[1]];
      break;
    case "F":
      [arr[2], arr[3]] = [arr[3], arr[2]];
      break;
  }
};

for (let el of input) {
  swap(el, arr);
}

const smallIndex = arr.indexOf("small") + 1;
const bigIndex = arr.indexOf("big") + 1;

console.log(smallIndex);
console.log(bigIndex);
