// 만 나이: 국제적인 표준 방법이다. 한국에서도 법에서는 만 나이만을 사용한다.
// 세는 나이: 한국에서 보통 나이를 물어보면 세는 나이를 의미한다.
// 연 나이: 법률에서 일괄적으로 사람을 구분하기 위해서 사용하는 나이이다.
/**
만 나이: 생일 기준으로 계산. 어떤 사람이 태어났을 때, 그 사람의 나이는 0세이고, 생일이 지날 때마다 1세가 증가한다. 예를 들어, 생일이 2003년 3월 5일인 사람은 2004년 3월 4일까지 0세이고, 2004년 3월 5일부터 2005년 3월 4일까지 1세이다.
세는 나이: 생년 기준으로 계산. 어떤 사람이 태어났을 때, 그 사람의 나이는 1세이고, 연도가 바뀔 때마다 1세가 증가한다. 예를 들어, 생일이 2003년 3월 5일인 사람은 2003년 12월 31일까지 1세이고, 2004년 1월 1일부터 2004년 12월 31일까지 2세이다.
연 나이: 생년 기준으로 계산. 현재 연도에서 생년을 뺀 값. 예를 들어, 생일이 2003년 3월 5일인 사람은 2003년 12월 31일까지 0세이고, 2004년 1월 1일부터 2004년 12월 31일까지 1세이다.
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [birth, now] = fs.readFileSync(filePath).toString().trim().split("\n");

const [bY, bM, bD] = birth.split(" ").map(Number);
const [nY, nM, nD] = now.split(" ").map(Number);

let age1 = nY - bY - 1;
const age2 = nY - bY + 1;
const age3 = nY - bY;

if (bM < nM) {
  age1++;
} else if (bM === nM && bD <= nD) {
  age1++;
}

console.log(`${age1}\n${age2}\n${age3}`);
