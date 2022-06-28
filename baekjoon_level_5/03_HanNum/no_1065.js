const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const num = Number(fs.readFileSync(filePath).toString().trim());

/**
 * 1. count 변수를 만들고 0을 할당한다.
 * 2. for 문을 돌려서 1 부터 num 까지 순회한다.
 * 3. 순회하면서 할 일은 다음과 같다.
 * 4. i 가 한 자리 수이거나, 두 자리 수이면 한수이다. count를 1 증가시킨다.
 * 5. i 가 세 자리 수 이상이면 i 의 각 자리수를 쪼개 배열에 저장한다. (arrNum)
 * 6. 첫째 자리와 둘째 자리의 차를 구한다. (diff)
 * 7. 한수인지 체크하는 boolean 변수를 만들고 true를 할당한다. (isHan)
 * 8. arrNum의 셋째짜리부터 순회하면서 다음을 체크한다.
 *    * arrNum[j - 1] - arrNum[j] 가 diff 와 같은가?
 *      같으면 -> 넘어간다.
 *      다르면 -> isHan 을 false 로 하고, arrNum 순회를 종료한다.
 * 9. isHan 이 true 라면 count를 1 증가시킨다.
 * 10. count 를 출력한다.
 */

let count = 0;
for(let i = 1; i <= num; i++){
    if(i < 100) {
        count++;
        continue;
    }
    arrNum = String(i).split('').map(el => Number(el));
    const diff = arrNum[0] - arrNum[1];
    let isHan = true;
    for(let j = 2; j < arrNum.length; j++) {
        if(arrNum[j - 1] - arrNum[j] !== diff){
            isHan = false;
            break;
        }
    }
    if(isHan) count++;
}

console.log(count);



