const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = t.split(" ").map(Number);
const [num, ...apples] = input.map(Number);

let move = 0;

let point = 0; //바구니 위치: 가장 왼쪽 인덱스

for (let el of apples) {
  const apple = el - 1;
  const width = m - 1;

  if (apple < point) {
    move += point - apple;
    point = apple;
  } else if (apple > point + width) {
    const tmp = apple - (point + width);

    move += tmp;
    point = point + tmp;
  }
}

console.log(move);
