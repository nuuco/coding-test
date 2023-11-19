const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.split("");
let wrongIdx = -1;
const letter = [];
let i = 1;

const compareStr = (str1, str2) => {
  let diffCnt = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      diffCnt++;
    }
  }
  return diffCnt;
};

while (input.length > 0) {
  const char = input.splice(0, 6);
  if (compareStr(char, "000000") < 2) {
    letter.push("A");
  } else if (compareStr(char, "001111") < 2) {
    letter.push("B");
  } else if (compareStr(char, "010011") < 2) {
    letter.push("C");
  } else if (compareStr(char, "011100") < 2) {
    letter.push("D");
  } else if (compareStr(char, "100110") < 2) {
    letter.push("E");
  } else if (compareStr(char, "101001") < 2) {
    letter.push("F");
  } else if (compareStr(char, "110101") < 2) {
    letter.push("G");
  } else if (compareStr(char, "111010") < 2) {
    letter.push("H");
  } else {
    wrongIdx = i;
    break;
  }
  i++;
}

if (wrongIdx !== -1) {
  console.log(wrongIdx);
} else {
  console.log(letter.join(""));
}
