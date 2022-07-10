const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [A, B, V] = fs.readFileSync(filePath).toString().trim().split(' ').map(el => Number(el));

/** 효율적인 풀이
 * 1. A = 낮에 올라가능 양, B = 밤에 미끄러지는 양, V = 도달해야하는 높이
 * 2. 1 ≤ B < A ≤ V ≤ 1,000,000,000 이 조건이다.
 * 3. 위 조건에 의해 하루동안 이동하는 양(A - B) 는  A보다 짧을 수 밖에 없다.
 * 4. 즉, 달팽이가 V 에 도착하는 경우는 모두 낮일 때다.
 * 5. 그렇다면 V - A 를 한 길이를 하루동안 갈 수 있는 길이로 나눈 후, 
 *    낮에 추가로 한 번더 이동해야하니 하루만 추가해주면 된다.
 * 6. 이 때 'V - A 를 한 길이를 하루동안 갈 수 있는 길이로 나눈 값'이 소수점이라도 결국은 하루가 걸린 것이니
 *    소수점은 올림 처리 해주어야한다.
 */

const MeterPerDay = A - B;

const day = Math.ceil((V - A) / MeterPerDay) + 1;
console.log(day);



//무식한 풀이
//let total = 0;
//let day = 0;
// while(true) {
//     day++;
//     total += A;
//     if(total >= V) break;

//     total -= B;
// }
//console.log(day);

