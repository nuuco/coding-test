// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

// const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

// const newArr = [...input].sort();

// const a = JSON.stringify(input);
// const increase = JSON.stringify(newArr);
// const decrease = JSON.stringify([...newArr].reverse());

// if (a === increase) {
//   console.log("INCREASING");
// } else if (a === decrease) {
//   console.log("DECREASING");
// } else {
//   console.log("NEITHER");
// }

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let T = null;
let count = 0;
const data = [];

const solution = (data) => {
  const newArr = [...data].sort();

  const a = JSON.stringify(data);
  const increase = JSON.stringify(newArr);
  const decrease = JSON.stringify([...newArr].reverse());

  if (a === increase) {
    console.log("INCREASING");
  } else if (a === decrease) {
    console.log("DECREASING");
  } else {
    console.log("NEITHER");
  }
};

rl.on("line", function (line) {
  if (!T) {
    // T이 null이면
    T = +line;
  } else {
    data.push(line);
    count += 1; // data를 입력받으면 count를 증가시켜주고
  }
  if (count === T) {
    // count가 T일때 rl.close()를 호출해준다.
    rl.close();
  }
}).on("close", function () {
  // rl.close()를 호출하면 이 콜백함수로 들어오고
  solution(data); // solution을 호출 한 후
  process.exit(); // 프로세스를 종료한다.
});
