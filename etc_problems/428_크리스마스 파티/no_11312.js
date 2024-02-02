const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [n, m, target, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(n);
m = Number(m);
target = target.split(" ");

const result = new Array(n).fill(0);

for (let i = 0; i < m; i++) {
  const arr = input[i].split(" ");

  for (let f = 0; f < n; f++) {
    if (arr[f] === target[i]) {
      result[f]++;
    }

    if (f + 1 === Number(target[i])) {
      const plus = arr.filter((el) => el !== target[i]).length;
      result[f] += plus;
    }
  }
}

console.log(result.join("\n"));
