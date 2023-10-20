const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const result = [];

for (let el of input) {
  const [s, t] = el.split(" ");

  let answer = true;
  let lastIdx = 0;
  for (let char of s) {
    const tmp = t.substring(lastIdx).indexOf(char);
    if (tmp === -1) {
      answer = false;
      break;
    } else {
      lastIdx = lastIdx + tmp + 1;
    }
  }

  if (answer) {
    result.push("Yes");
  } else {
    result.push("No");
  }
}

console.log(result.join("\n"));
