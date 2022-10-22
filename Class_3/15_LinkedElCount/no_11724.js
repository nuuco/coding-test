const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const [v, e] = t.split(' ').map(Number);
const metrix = [];

for(let i = 0; i <= v; i++) {
  metrix[i] = Array(v + 1).fill(0);
}

const isSolo = {};

// 정점 한 개만 있는 경우도 연결 개수 1개로 본다.
for(let el of arr) {
  const [i, j] = el.split(' ').map(Number);
  metrix[i][j] = 1;
  metrix[j][i] = 1;

  isSolo[i] = true;
  isSolo[j] = true;
}

let count = v - Object.keys(isSolo).length;

const bfs = (arr, i) => {
  const needVisit = [i];
  const visited = [];
  while(needVisit.length > 0) {
    const current = needVisit.shift();

    if(needVisit.includes(current) || visited.includes(current)) continue;
    visited.push(current);
    for(let j = 0; j <= arr[current].length; j++) {
      if(arr[current][j] === 1) {
        arr[current][j] = 2;
        needVisit.push(j);
      }
    }
  }

  return visited.length > 1 ? true : false;
}

for(let i = 0; i <= v; i++) {
  for(let j = 0; j <= v; j++) {
    if(metrix[i][j] === 1) {
      if(bfs(metrix, i)) count++;
    }
  }
}

//아무 노드와 연결되지 않은 정점도 연결 요소로 치는가?
console.log(count);
