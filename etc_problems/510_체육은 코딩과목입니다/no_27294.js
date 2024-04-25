const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let direction = "N";

for (let el of input) {
  if (el === 1) {
    //우향우
    switch (direction) {
      case "N":
        direction = "E";
        break;
      case "E":
        direction = "S";
        break;
      case "W":
        direction = "N";
        break;
      case "S":
        direction = "W";
        break;
    }
  } else if (el === 2) {
    //뒤로 돌아
    switch (direction) {
      case "N":
        direction = "S";
        break;
      case "E":
        direction = "W";
        break;
      case "W":
        direction = "E";
        break;
      case "S":
        direction = "N";
        break;
    }
  } else if (el === 3) {
    //좌향좌
    switch (direction) {
      case "N":
        direction = "W";
        break;
      case "E":
        direction = "N";
        break;
      case "W":
        direction = "S";
        break;
      case "S":
        direction = "E";
        break;
    }
  }
}

console.log(direction);
