const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const n = Number(fs.readFileSync(filePath).toString().trim());

/**
 * 1. 5kg 봉지 개수를 x, 3kg 봉지 개수를 y 라고 할 때, n = 5x + 3y 라고 표현하자.
 * 2. 5kg 와 3kg 로 배달할 수 있는지 여부를 변수 isPossible로 나타내고, 초기값은 false 로 준다.
 * 3. 총 봉지 개수 중 최소값을 저장할 변수 cnt 를 만들고 값은 Infinity 로 준다.
 * 4. for 문을 돌리면서 n에서 5의 배수를 뺀 값이 3으로 나눠지는지 확인하자.
 * 5. 3으로 나눠지면(나머지가 0이면) 그 값은 5kg 와 3kg 로 배달할 수 있다. isPossible = true;
 *    이 때 'n에서 5의 배수를 뺀 값을 3으로 나눈 몫'인 y이 값을 구한다.
 *    cnt 보다 x + y 값이 작다면 cnt 값을 x + y 값으로 갱신한다.
 * 6. 5 * x 가 n 보다 커지면 반복문을 빠져나온다.
 * 7. isPossible 이 계속 false 라면 -1을 출력한다.
 * 8. isPossible 이 true 라면 cnt 값을 출력한다.
 */

let isPossible = false;
let cnt = Infinity;  //총 봉지 개수 중 최소값 (x + y)

for(let x = 0; 5 * x <= n; x++) {
    if((n - (5 * x)) % 3 === 0) {
        isPossible = true;
        const y = (n - (5 * x)) / 3;
        if(cnt > x + y) {
            cnt = x + y;
        }
    }
}

if(isPossible) {
    console.log(cnt);
} else {
    console.log(-1);
}