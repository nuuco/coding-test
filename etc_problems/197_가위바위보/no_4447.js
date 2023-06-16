const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

while (input.length > 0) {
  const gameCnt = Number(input.shift());

  const games = input.splice(0, gameCnt);
  let p1Score = 0;
  let p2Score = 0;

  for (let el of games) {
    const [a, b] = el.split(" ");

    // 1: 주먹일때
    if (a === "R") {
      if (b === "S") {
        p1Score++;
      }
      if (b === "P") {
        p2Score++;
      }
    }

    // 1: 가위일때
    if (a === "S") {
      if (b === "P") {
        p1Score++;
      }
      if (b === "R") {
        p2Score++;
      }
    }

    // 1: 보일때
    if (a === "P") {
      if (b === "R") {
        p1Score++;
      }
      if (b === "S") {
        p2Score++;
      }
    }
  }

  if (p1Score > p2Score) {
    result.push("Player 1");
  } else if (p1Score < p2Score) {
    result.push("Player 2");
  } else {
    result.push("TIE");
  }
}

console.log(result.join("\n"));
