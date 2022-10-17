const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

//어렵!!!
arr.unshift(0); //더미 데이터, 이제 arr[i]는 i 번째 계단의 점수

const dp = [];
dp[0] = 0;
if(n >= 1) dp[1] = arr[1];
if(n >= 2) dp[2] = arr[2] + arr[1];

for(let i = 3; i <= n; i++) {
  dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
  //3개를 연속으로 오르는 경우를 제외하고 i 번째 계단에 도착하는 경우의 수는 2개 이다. (아예 예외 케이스를 제외하고 가능한 경우로 계산하는게 tip)
  // 1. i - 3 계단,  i - 1 계단을 밟고 i 번째 계단에 온 경우
  // 2. i - 2 계단을 밟고 i 번째 계단에 온 경우
  // 1의 경우는 i - 3 까지의 최댓값(dp[i - 3])에서 arr[i], arr[i - 1] 값을 더한 것
  // 2의 경우는 i - 2 까지의 최댓값(dp[i - 2])에서 arr[i] 값을 더한 것
  // 1 과 2 두 값 중 최댓값을 구하면 그 값이 i 계단을 올랐을 때 최대로 받을 수 있는 점수다
}

console.log(dp[dp.length - 1]);

/**
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   0    │
│    1    │   10   │
│    2    │   30   │
│    3    │   35   │
│    4    │   55   │
│    5    │   65   │
│    6    │   75   │
└─────────┴────────┘
 */


