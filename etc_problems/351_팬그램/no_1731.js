const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();
const result = [];

const solution = (sentence) => {
  const alphabet = {};
  for (let i = 97; i <= 122; i++) {
    const char = String.fromCharCode(i);
    alphabet[char] = false;
  }

  for (let char of sentence) {
    if (char !== " " && !alphabet[char]) {
      alphabet[char] = true;
    }
  }

  const isPangram = Object.values(alphabet).every((el) => el);

  return isPangram ? "Y" : "N";
};

for (let el of input) {
  result.push(solution(el));
}

console.log(result.join("\n"));
