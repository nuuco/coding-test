const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

//어렵당....!
let arr = new Array(100001).fill(0); //갔던 숫자 체크용
let ans = 0;
const bfs = () => {
  let queue = [n];
  arr[n] = 1;
  let cnt = 0;
  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      if (current === k) return cnt;
      for (let next of [current - 1, current + 1, current * 2]) {
        if (next >= 0 && next <= 100000 && arr[next] === 0) {
          arr[next] = 1;
          queue.push(next);
        }
      }
    }
    cnt++;
  }
}
ans = bfs();
console.log(ans);