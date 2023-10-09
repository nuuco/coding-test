const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const abc = "abcdefghijklmnopqrstuvwxyz";
const abcArr = abc.split("");

const result = [];
for (let el of input) {
  const newStr = [...new Set(el.toLowerCase().split(""))].sort().join("");

  if (newStr.includes(abc)) {
    result.push("pangram");
  } else {
    let tmp = "missing ";

    for (let char of abcArr) {
      if (!newStr.includes(char)) {
        tmp += char;
      }
    }

    result.push(tmp);
  }
}

console.log(result.join("\n"));
