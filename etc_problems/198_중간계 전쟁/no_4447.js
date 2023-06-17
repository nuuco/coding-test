const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const good = [1, 2, 3, 3, 4, 10];
const evil = [1, 2, 2, 2, 3, 5, 10];

const result = [];
let gameCnt = 1;
for(let i = 0; i < input.length; i = i + 2) {
  const gScore = input[i].split(' ').map(Number).reduce((acc, cur, idx) => acc + (cur * good[idx]), 0);
  const eScore = input[i + 1].split(' ').map(Number).reduce((acc, cur, idx) => acc + (cur * evil[idx]), 0);

  // console.log(gScore, eScore);
  let answer = "Battle " + gameCnt + ": ";
  if(gScore > eScore) {
    answer += "Good triumphs over Evil";
  } else if(gScore < eScore) {
    answer += "Evil eradicates all trace of Good";
  } else {
    answer += "No victor on this battle field";
  }
  result.push(answer);
  gameCnt++;
}

console.log(result.join("\n"));
