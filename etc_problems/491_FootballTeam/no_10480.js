const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

for (let el of input) {
  let str = el.replaceAll("i", "*");
  str = str.replaceAll("e", "-");
  str = str.replaceAll("I", "$");
  str = str.replaceAll("E", "@");

  str = str.replaceAll("*", "e");
  str = str.replaceAll("-", "i");
  str = str.replaceAll("$", "E");
  str = str.replaceAll("@", "I");

  result.push(str);
}

console.log(result.join("\n"));
