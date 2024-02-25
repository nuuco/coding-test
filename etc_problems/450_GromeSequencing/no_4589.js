const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().split("\n");

const result = [];

for (let el of input) {
  const arr = el.split(" ").map(Number);
  const arrStr = arr.join();

  let isOrdered = false;

  if (arrStr === arr.sort((a, b) => a - b).join()) {
    isOrdered = true;
  } else if (arrStr === arr.sort((a, b) => b - a).join()) {
    isOrdered = true;
  } else {
    isOrdered = false;
  }

  if (isOrdered) {
    result.push("Ordered");
  } else {
    result.push("Unordered");
  }
}

if (Number(t) > 0) {
  result.unshift("Gnomes:");
  console.log(result.join("\n"));
}
