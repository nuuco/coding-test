const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const convertAlphabetToNum = (char) => {
  return char.charCodeAt() - 64;
};

const getDiff = (char1, char2) => {
  const x = convertAlphabetToNum(char1);
  const y = convertAlphabetToNum(char2);

  if (y >= x) {
    return y - x;
  } else {
    return y + 26 - x;
  }
};

const result = [];

for (let el of input) {
  const answer = [];
  const [a, b] = el.split(" ");
  for (let i = 0; i < a.length; i++) {
    answer.push(getDiff(a[i], b[i]));
  }

  result.push("Distances: " + answer.join(" "));
}

console.log(result.join("\n"));
