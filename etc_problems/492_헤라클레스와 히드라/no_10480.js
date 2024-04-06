const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];
let i = 1;
while (input.length > 0) {
  const num = Number(input.shift());
  const strArr = input.shift().split("");
  const cCount = strArr.filter((el) => el === "c").length;
  const bCount = strArr.length - cCount;

  const answerNum = num + cCount - bCount;
  const answer = `Data Set ${i}:\n${answerNum}`;

  result.push(answer);
  i++;
}

console.log(result.join("\n\n"));
