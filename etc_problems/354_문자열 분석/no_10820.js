const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const result = [];
for (let el of input) {
  if (el === "") continue;
  //소문자 대문자 숫자 공백
  const lowerCase = el.match(/[a-z]/g);
  const upperCase = el.match(/[A-Z]/g);
  const number = el.match(/\d/g);
  const space = el.match(/\s/g);
  result.push(
    `${lowerCase ? lowerCase.length : 0} ${upperCase ? upperCase.length : 0} ${number ? number.length : 0} ${
      space ? space.length : 0
    }`
  );
}

console.log(result.join("\n"));
