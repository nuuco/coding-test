const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

let [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
n = Number(n);

const paper = [];
for(let i = 0; i < Number(n); i++) {
  paper[i] = arr[i].split(' ').map(Number);
}

let whiteCount = 0; //0 = 하얀 색종이
let blueCount = 0;  //1 = 파란 색종이

const cutting = (startX, startY, n) => {
  //1) 탈출 코드
  //n === 1 이거나,
  //paper[startX][startY] ~ paper[startX][startY + n - 1]
  // ...
  //paper[startX + n - 1][startY] ~ paper[startX + n - 1][startY + n - 1]
  //가 모두 같은 숫자인 경우 탈출

  const color = paper[startX][startY];  //0 or 1 

  if(n === 1) {
    return color === 0 ? whiteCount++ : blueCount++;
  }

  let isOnePaper = true;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if(paper[startX + i][startY + j] !== color) {
        isOnePaper = false;
      }
    }
  }

  if(isOnePaper) {
    return color === 0 ? whiteCount++ : blueCount++;
  }

  //2) 재귀 코드
  //탈출코드에 걸리지 않은 경우
  //4등분해서 각 4분면을 재귀

  //1사분면
  cutting(startX, startY, n / 2);
  //2사분면
  cutting(startX, startY + (n / 2), n / 2);
  //3사분면
  cutting(startX + (n / 2), startY, n / 2);
  //4사분면
  cutting(startX + (n / 2), startY + (n / 2), n / 2);
}

cutting(0, 0, n);

console.log(`${whiteCount}\n${blueCount}`);
