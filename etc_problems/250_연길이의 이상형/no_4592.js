const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();
let result = "";


// 외향(Extroversion)	내향(Introversion)	선호하는 세계: 세상과 타인 / 내면 세계
// 감각(Sensation)	직관(iNtuition)	인식형태: 실제적인 인식/ 실제 너머로 인식
// 사고(Thinking)	감정(Feeling)	판단기준: 사실과 진실 위주 / 관계와 사람 위주
// 판단(Judging)	인식(Perceiving)	생활양식: 계획적인 생활 / 즉흥적인 생활

if(input[0] === 'E') {
  result += 'I'
} else {
  result += 'E'
}

if(input[1] === 'S') {
  result += 'N'
} else {
  result += 'S'
}

if(input[2] === 'T') {
  result += 'F'
} else {
  result += 'T'
}

if(input[3] === 'P') {
  result += 'J'
} else {
  result += 'P'
}

console.log(result);



