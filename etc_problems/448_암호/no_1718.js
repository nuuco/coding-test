const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [sentence, key] = fs.readFileSync(filePath).toString().split("\n");

// console.log('z'.charCodeAt(0)) //97 ~ 122

let result = [];

for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];
  const keyIdx = i % key.length;
  if (char === " ") {
    result.push(" ");
  } else {
    let codeNum = char.charCodeAt(0) - (key[keyIdx].charCodeAt(0) - 96);

    if (codeNum < 97) {
      codeNum += 26;
    }
    result.push(String.fromCharCode(codeNum));
  }
}

console.log(result.join(""));
