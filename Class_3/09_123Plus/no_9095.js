const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const max = Math.max(...arr);

//dp[n][0] = 마지막이 + 1 인 경우 n을 만들 수 있는 경우의 수
//dp[n][1] = 마지막이 + 2 인 경우 n을 만들 수 있는 경우의 수
//dp[n][2] = 마지막이 + 3 인 경우 n을 만들 수 있는 경우의 수
//-- 기본 metrix 세팅 --
//   0  1  2
// 0 1  0  0
// 1 1  0  0
// 2 (1)(2)(3)
//(1) 2 - 1 한 값을 만들수 있는 경우의 수 = dp[1]의 총 합
//(2) 2 - 2 한 값을 만들수 있는 경우의 수 = dp[0]의 총 합
//(3) 2 - 3 은 음수여서 만들 수 없음 = 0


const metrix = [];

for(let i = 0; i <= max; i++) {
    metrix[i] = Array(2).fill(0);
}

metrix[0] = [1, 0, 0];
metrix[1] = [1, 0, 0];
metrix[2] = [1, 1, 0];

const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
}

for(let i = 3; i <= max; i++) {
    metrix[i][0] = sum(metrix[i - 1]);
    metrix[i][1] = sum(metrix[i - 2]);
    metrix[i][2] = sum(metrix[i - 3]);
}

const result = [];
for(let el of arr) {
    result.push(sum(metrix[el]));
}

console.log(result.join('\n'));

/*
console.table(metrix);
┌─────────┬─────┬────┬────┐
│ (index) │  0  │ 1  │ 2  │
├─────────┼─────┼────┼────┤
│    0    │  1  │ 0  │ 0  │
│    1    │  1  │ 0  │ 0  │
│    2    │  1  │ 1  │ 0  │
│    3    │  2  │ 1  │ 1  │
│    4    │  4  │ 2  │ 1  │
│    5    │  7  │ 4  │ 2  │
│    6    │ 13  │ 7  │ 4  │
│    7    │ 24  │ 13 │ 7  │
│    8    │ 44  │ 24 │ 13 │
│    9    │ 81  │ 44 │ 24 │
│   10    │ 149 │ 81 │ 44 │
└─────────┴─────┴────┴────┘
*/

