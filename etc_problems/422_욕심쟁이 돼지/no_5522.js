// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

// const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

// const result = [];
// while (input.length > 0) {
//   let count = 1;
//   const n = Number(input.shift());
//   let arr = input.shift().split(" ").map(Number);

//   let sum = 0;
//   for (let i = 0; i < 6; i++) {
//     sum += arr[i];
//   }

//   while (n >= sum) {
//     count++;
//     sum = 0;
//     let newArr = [];
//     for (let i = 0; i < 6; i++) {
//       const prev = i === 0 ? 5 : i - 1;
//       const next = i === 5 ? 0 : i + 1;
//       const over = i <= 2 ? i + 3 : i - 3;
//       newArr[i] = arr[prev] + arr[next] + arr[over] + arr[i];
//       sum += newArr[i];
//     }
//     arr = [...newArr];
//   }
//   result.push(count);
// }

// console.log(result.join("\n"));

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = null;
let count = 0;
const data = [];

const solution = (data) => {
  const result = [];
  while (data.length > 0) {
    let count = 1;
    const n = Number(data.shift());
    let arr = data.shift().split(" ").map(Number);

    let sum = 0;
    for (let i = 0; i < 6; i++) {
      sum += arr[i];
    }

    while (n >= sum) {
      count++;
      sum = 0;
      let newArr = [];
      for (let i = 0; i < 6; i++) {
        const prev = i === 0 ? 5 : i - 1;
        const next = i === 5 ? 0 : i + 1;
        const over = i <= 2 ? i + 3 : i - 3;
        newArr[i] = arr[prev] + arr[next] + arr[over] + arr[i];
        sum += newArr[i];
      }
      arr = [...newArr];
    }
    result.push(count);
  }

  console.log(result.join("\n"));
};

rl.on("line", function (line) {
  if (!T) {
    // T이 null이면
    T = Number(line) * 2;
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
