const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let [t, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

t = Number(t);
const tc = [];
for (let i = 0; i < t; i++) {
  arr.shift();
  const [r, c] = arr.shift().split(" ").map(Number);
  tc.push(arr.splice(0, r));
}

const candyCount = (tcArr) => {
  let count = 0;
  for (let i = 0; i < tcArr.length; i++) {
    const tmp = tcArr[i].match(/>o</g);
    if (tmp !== null) {
      count += tmp.length;
    }

    for (let j = 0; j < tcArr[i].length; j++) {
      if (tcArr[i][j] === "v" && i <= tcArr.length - 3) {
        if (tcArr[i + 1][j] === "o" && tcArr[i + 2][j] === "^") {
          count++;
        }
      }
    }
  }

  return count;
};

const result = [];
for (let i = 0; i < tc.length; i++) {
  result.push(candyCount(tc[i]));
}

console.log(result.join("\n"));
