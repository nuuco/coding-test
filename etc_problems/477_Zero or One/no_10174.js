const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(" ");

function determineWinner(A, B, C) {
  if (A === B && B === C) {
    return "*"; // No winner
  } else if (A !== B && A !== C) {
    return "A"; // Alice is the winner
  } else if (B !== A && B !== C) {
    return "B"; // Bob is the winner
  } else {
    return "C"; // Clara is the winner
  }
}

const winner = determineWinner(parseInt(a), parseInt(b), parseInt(c));

console.log(winner);

// const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(" ");
// let winner = "";
// if (a === b && b === c) {
//   winner = "*";
// } else if (a === b) {
//   winner = "C";
// } else if (a === c) {
//   winner = "B";
// } else {
//   winner = "A";
// }

// console.log(winner);
