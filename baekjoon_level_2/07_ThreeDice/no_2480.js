const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const diceArr = [a, b, c];
let reward = 0;

/**
 * 1. 일단 세 주사위 중 몇 개가 일치하는지 알아내자.
 * 2. (3개 일치) a === b === c 면 상금은 10,000원+(a)×1,000원 이다. 
 * 3. (다 불일치) a !== b !== c 면, 즉 3개 다 수가 다르면
 *      최댓값(max)을 찾고, 상금은 (max)×100원 이 된다.
 * 4. 위 두 조건에 걸리지 않았다면 2개가 일치하는 경우다.
 *      a === b || a === c 라면 같은 눈은 a
 *      아니라면 같은 눈은 b(= c)
 *      이 때의 상금은 1,000원+(같은 눈)×100원 이다.
 */

if(a === b && a === c) reward = 10000 + (a * 1000); //3개 일치
else if(a !== b && a !== c && b !== c) {  //다 불일치 (여기서 b !== c 조건 안넣어줘서 헤맸음...)
    const max = Math.max(a, b, c);
    reward = max * 100;
} else { //2개 일치
    if(a === b || a === c) reward = 1000 + (a * 100);
    else reward = 1000 + (b * 100);
}

console.log(reward);