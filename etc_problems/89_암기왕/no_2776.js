const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (input) => {
  const memo1 = input[1].split(" ");
  const memo2 = input[3].split(" ");

  const tagetMemo = {};
  for (let el of memo1) {
    if (!tagetMemo[el]) {
      tagetMemo[el] = true;
    }
  }

  const result = [];

  for (let el of memo2) {
    if (tagetMemo[el]) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  return result.join("\n");
};

const result = [];

for (let i = 0; i < input.length; i = i + 4) {
  result.push(solution(input.slice(i, i + 4)));
}

console.log(result.join("\n"));
