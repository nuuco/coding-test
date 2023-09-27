const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [all, made] = fs.readFileSync(filePath).toString().trim().split("\n");

const [a1, b1, c1] = all.split(" ").map(Number);
const [a2, b2, c2] = made.split(" ").map(Number);

//소수점이 6자리가 넘어갈 경우, 6자리로 끊어주는 함수
const decimalFormat = (num) => {
  let numStr = String(num);
  const result = numStr.match(/\d\.([\d]{7})/);

  if (result) {
    return num.toFixed(6);
  }

  return num;
};

//만들 수 있는 칵테일 수
let min = Math.floor(a1 / a2);
let tmp = Math.floor(b1 / b2);
if (min > tmp) {
  min = tmp;
}

tmp = Math.floor(c1 / c2);
if (min > tmp) {
  min = tmp;
}

let a3 = a1 - a2 * min;
let b3 = b1 - b2 * min;
let c3 = c1 - c2 * min;

if ([a3, b3, c3].includes(0)) {
  console.log(`${a3} ${b3} ${c3}`);
} else {
  let a4 = a2 / a3;
  let b4 = b2 / b3;
  let c4 = c2 / c3;

  //나머지 값들을 비율로 반들기 위한 x (나머지에 얼마를 곱해야 하나)
  //이 x가 가장 큰 값이 기준이 된다.
  let max = a4;
  let targetShare = a3;
  let target = a2;
  if (max < b4) {
    max = b4;
    targetShare = b3;
    target = b2;
  }

  if (max < c4) {
    max = c4;
    targetShare = c3;
    target = c2;
  }

  const x = targetShare / target;

  //기준 x가 잡혔으면, 비율(~2 들)에 ( targetShare / target = x)를 곱한 값만큼(~2 * x)칵테일을 더 만들 수 있다.
  //즉 남은 재료량은 나머지(~3) - (~2 * x = ~5 리고 하자...)

  let a5 = a3 - a2 * x;
  let b5 = b3 - b2 * x;
  let c5 = c3 - c2 * x;

  a5 = decimalFormat(a5);
  b5 = decimalFormat(b5);
  c5 = decimalFormat(c5);

  console.log(`${a5} ${b5} ${c5}`);
}
