const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

let sum = 1
let layer = 1;

while(n > sum) {
    sum += 6 * layer;
    layer++;
}

console.log(layer);

/** 간단했는데, 오래 걸렸다.
 * #숫자 = 각 레이어의 최댓값 (sum)
 * => 레이어(최종 줄력값)
 * n = #1  => 1
 * n = 2 ~ #7(6개) => 2
 * n = 8 ~ #19(12개) => 3
 * n = 20 ~ #37(18개) => 4
 * n = 38 ~ #61(24개) => 5
 * ...
 * n이 sum 보다 크다면 sum은 6 * (레이어 - 1) 만큼 증가시킨다.
 * n이 sum 보다 작거나 같아진다면 n 이 해당 레이어에 속한다는 의미다.
 * 해당 레이어를 출력한다.
 */




