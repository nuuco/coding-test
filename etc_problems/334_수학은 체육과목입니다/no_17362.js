const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const n = Number(fs.readFileSync(filePath).toString().trim());

// 엄지는 = 1 + 8n ==> 1 9 17 25
const left = (n - 1) % 8;

switch (left) {
  case 1:
  case 7:
    console.log(2);
    break;
  case 2:
  case 6:
    console.log(3);
    break;
  case 3:
  case 5:
    console.log(4);
    break;
  case 4:
    console.log(5);
    break;
  default:
    console.log(1);
    break;
}
