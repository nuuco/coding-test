const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = [];

for (let el of input) {
  arr.push(el.split(" ").map(Number));
}

arr.sort((a, b) => a[2] - b[2]);

// console.log(arr);

const result = [];
const nations = {};

while (result.length < 3) {
  const candi = arr.pop();
  let isCandi = false;

  if (!nations[candi[0]]) {
    nations[candi[0]] = 1;
    isCandi = true;
  } else if (nations[candi[0]] <= 1) {
    nations[candi[0]]++;
    isCandi = true;
  }

  if (isCandi) {
    result.push(`${candi[0]} ${candi[1]}`);
  }
}

console.log(result.join("\n"));
