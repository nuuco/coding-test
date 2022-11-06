const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const metrix = [];

for(let el of arr) {
  metrix.push(el.split('').map(Number));
}

const bfs = (arr, x, y) => {
  let needVisit = [[x, y]];
  let count = 0;

  while(needVisit.length > 0) {
    const [i, j] = needVisit.shift();
    if(arr[i][j] !== 1) continue;  
    //point) needVisit에 넣을 때도 1인지 검사, 빼고 나서도 1인지 검사하기!!
    // 빼고나서 1인지 검사 안하면 '시간 초과' 난다.

    arr[i][j] = 2;
    count++;

    //상
    if(i - 1 >= 0 && arr[i - 1][j] === 1) {
      needVisit.push([i - 1, j]);
    }
    //하
    if(i + 1 < arr.length && arr[i + 1][j] === 1) {
      needVisit.push([i + 1, j]);
    }
    //좌
    if(j - 1 >= 0 && arr[i][j - 1] === 1) {
      needVisit.push([i, j - 1]);
    }
    //우
    if(j + 1 < arr[0].length && arr[i][j + 1] === 1) {
      needVisit.push([i, j + 1]);
    }
  }

  return count;
}

const result = [];

for(let i = 0; i < metrix.length; i++) {
  for(let j = 0; j < metrix[i].length; j++) {
    if(metrix[i][j] === 1) {
      result.push(bfs(metrix, i, j));
    }
  }
}

result.sort((a, b) => a - b);
console.log(result.length);
console.log(result.join('\n'));