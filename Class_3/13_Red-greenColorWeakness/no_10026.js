const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const img = [];
const weekImg = [];

for(let el of arr) {
  const tmp = el.split('');
  const weekTmp = tmp.map(color => {
    if(color === 'G') return 'R';
    return color;
  })
  img.push(tmp);
  weekImg.push(weekTmp);
}

//bfs
const bfs = (arr, color, x, y) => {
  const needVisit = [[x, y]];

  while(needVisit.length > 0) {
    const [i, j] = needVisit.shift();
    if(arr[i][j] !== color) continue;
    arr[i][j] = -1;
    //위
    if(i - 1 >= 0 && arr[i - 1][j] === color) {
      needVisit.push([i - 1, j]);
    }

    //아래
    if(i + 1 < arr.length && arr[i + 1][j] === color) {
      needVisit.push([i + 1, j]);
    }

    //왼
    if(j - 1 >= 0 && arr[i][j - 1] === color) {
      needVisit.push([i, j - 1]);
    }

    //오
    if(j + 1 < arr[0].length && arr[i][j + 1] === color) {
      needVisit.push([i, j + 1]);
    }
  }
}

//찾으면 bfs 로 넘어감
const search = (arr) => {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[0].length; j++) {
      if(arr[i][j] !== -1) {
        count++
        bfs(arr, arr[i][j], i, j);
      }
    }
  }
  return count;
}

console.log(`${search(img)} ${search(weekImg)}`);


