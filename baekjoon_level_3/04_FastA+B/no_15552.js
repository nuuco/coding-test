const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

//빠른 계산이 필요하므로 한 줄씩 출력하면 시간초과가 난다.
//따라서 결과값에 개행문자를 넣어 한번에 출력해야한다.
let result = "";
for(let el of arr){
    const numArr = el.split(' ');
    result += `${parseInt(numArr[0]) + parseInt(numArr[1])}\n`;
}

console.log(result);



//<readline> 으로 풀기
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let T = null;
// let count = 0;
// const data = [];

// rl.on('line', function (line) {
//   if (!T) {
//     // T이 null이면
//     T = +line;
//   } else {
//     data.push(line.split(" "));
//     count += 1; // data를 입력받으면 count를 증가시켜주고
//   }
//   if (count === T) {
//     // count가 T일때 rl.close()를 호출해준다.
//     rl.close();
//   }
// }).on('close', function () {
//   data.forEach(el => {
//       console.log(parseInt(el[0]) + parseInt(el[1]));
//   })
//   process.exit(); // 프로세스를 종료한다.
// });

