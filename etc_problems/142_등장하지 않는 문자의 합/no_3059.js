const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const solution = (str) => {
    const alphabet = new Array(26).fill(true); //일단 다 포함
    for (let i = 0; i < str.length; i++) {
      let num = str.charCodeAt(i) - 65;

      if (alphabet[num]) {
        alphabet[num] = false; //나오면 제외
      }
    }

    let sum = 0;
    alphabet.forEach((el, idx) => {
      if (el) {
        //포함인것만
        sum += idx + 65;
      }
    });

    return sum;
  };

  const result = [];
  for (let i = 1; i < input.length; i++) {
    result.push(solution(input[i]));
  }

  console.log(result.join("\n"));

  process.exit();
});

//fs 풀이
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

// const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

// const solution = (str) => {
//   const alphabet = new Array(26).fill(true); //일단 다 포함
//   for(let i = 0; i < str.length; i++) {
//     let num = str.charCodeAt(i) - 65;

//     if(alphabet[num]) {
//       alphabet[num] = false; //나오면 제외
//     }
//   }

//   let sum = 0;
//   alphabet.forEach((el, idx) => {
//     if(el) { //포함인것만
//       sum += idx + 65;
//     }
//   })

//   return sum;
// }

// const result = [];
// for(let el of input) {
//   result.push(solution(el));
// }

// console.log(result.join('\n'));
