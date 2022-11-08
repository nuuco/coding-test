const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim();

//-가 나오면 괄호를 열어 뒤에 +로 연결된 숫자들은 최대한 묶는다. -나오면 괄호를 닫는다.

let oneNum = "";
let prevNum = 0;
let sum = 0;
let subSum = 0;
let inSubtract = false;

for(let el of input) {
  if(el !== "+" && el !== "-") {
    oneNum += el;
  } else {
    prevNum = Number(oneNum);
    oneNum = "";
  }

  if(el === "+") {
    if(inSubtract) {
      subSum += prevNum;
    } else {
      sum += prevNum;
    }
  }

  if(el === "-") {
    if(inSubtract) {
      subSum += prevNum;
      sum += -1 * subSum;
      subSum = 0;
    } else {
      sum += prevNum;
    }
    inSubtract = true;
  }
}

//마지막 숫자
prevNum = Number(oneNum);

if(inSubtract) {
  subSum += prevNum;
  sum += -1 * subSum;
  subSum = 0;
} else {
  sum += prevNum;
}

console.log(sum);
