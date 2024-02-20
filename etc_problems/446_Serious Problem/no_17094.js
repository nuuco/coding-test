const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  const countE = input.match(/e/g).length;
  const count2 = input.match(/2/g).length;

  if (count2 === countE) {
    console.log("yee");
  } else if (count2 > countE) {
    console.log("2");
  } else {
    console.log("e");
  }
};


let T = null;
let input;

rl.on("line", function (line) {
  if (!T) {
    // T이 null이면
    T = +line;
  } else {
    input = line;
    solution(input); // solution을 호출 한 후
    rl.close();
  }
}).on("close", function () {
  process.exit(); // 프로세스를 종료한다.
});
