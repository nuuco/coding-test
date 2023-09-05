const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

for (let el of input) {
  const [a, b] = el.split(" ");

  let aObj = {};
  for (let el of a.split("").sort()) {
    if (!aObj[el]) {
      aObj[el] = 1;
    } else {
      aObj[el]++;
    }
  }

  let bObj = {};
  for (let el of b.split("").sort()) {
    if (!bObj[el]) {
      bObj[el] = 1;
    } else {
      bObj[el]++;
    }
  }

  let aJson = JSON.stringify(aObj);
  let bJson = JSON.stringify(bObj);

  if (aJson === bJson) {
    result.push(`${a} & ${b} are anagrams.`);
  } else {
    result.push(`${a} & ${b} are NOT anagrams.`);
  }
}

console.log(result.join("\n"));
