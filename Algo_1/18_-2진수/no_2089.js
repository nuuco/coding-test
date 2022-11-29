const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = Number(fs.readFileSync(filePath).toString().trim());

// 1, 110, 111, 100, 101, 11010, 11011, 11000, 11001
// 1, 10,  11,  100, 101, 110,   111,   1000,  1001

const solution = (num) => {
  let answer = "";

  if(num === 0) return "0";
  
  while(num / -2 !== 0) {

    if(num / -2 === Math.ceil(num / -2)) { //-2로 나누어 떨어진다면
      answer = "0" + answer;
    } else { //떨어지지 않는다면
      answer = "1" + answer;
    }
    num = Math.ceil(num / -2);
  }

  return answer;
}

const answer = solution(input)
console.log(answer);