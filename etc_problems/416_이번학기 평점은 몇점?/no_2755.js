const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let sumCredit = 0; //이수 학점 총계
let sumGrade = 0; //학점 * 성적 총계

const gradeCovert = {
  "A+": 4.3,
  "A0": 4.0,
  "A-": 3.7,
  "B+": 3.3,
  "B0": 3.0,
  "B-": 2.7,
  "C+": 2.3,
  "C0": 2.0,
  "C-": 1.7,
  "D+": 1.3,
  "D0": 1.0,
  "D-": 0.7,
  "F": 0.0,
};

for (let el of input) {
  let [, credit, grade] = el.split(" ");
  credit = Number(credit);
  grade = gradeCovert[grade];

  sumCredit += credit;
  sumGrade += credit * grade;
}

const num = sumGrade / sumCredit + 0.000000001;
const roundNum = Math.round(num * 100) / 100;

console.log(roundNum.toFixed(2));
