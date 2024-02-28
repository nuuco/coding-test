// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

// const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

// const arr = input
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);

// console.log(arr[arr.length - 1] - arr[0]);


//---- readline으로 풀기 ----//

const solution = (input) => {
  const arr = input
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  return arr[arr.length - 1] - arr[0];
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = null;
let input = null;

rl.on("line", function (line) {
  if (!T) {
    // T이 null이면
    T = +line;
  } else {
    input = line;
    rl.close();
  }
}).on("close", function () {
  // rl.close()를 호출하면 이 콜백함수로 들어오고
  solution(data); // solution을 호출 한 후
  process.exit(); // 프로세스를 종료한다.
});
