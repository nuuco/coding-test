const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = parseInt(fs.readFileSync(filePath).toString().trim());

/** 조금 헷갈렸다!
 * 1. count 변수를 만들고 0을 할당한다. 새로운 수를 저장할 변수를 만들어 input 값을 할당한다. (newNum)
 * 2. do-while 문을 쓴다.
 * 3. newNum의 십의 자리 수와, 일의 자리 수를 구한다. 이 때 십의 자리 수가 없으면 0이다.
 *     tenNum = parseInt(newNum / 10); oneNum = newNum % 10;
 * 4. 두 수의 합을 구한다.
 *      sum = tenNum + oneNum;
 * 5. 일의 자리 수와 두 수 합의 일의 자리 수를 조합한 새로운 수를 구한다.
 *      newNum = (oneNum * 10) +  sum % 10;
 * 6. count++ 
 * 7. while 조건문에서 새로운 수(newNum)가 input 값과 같은지 확인한다. 같으면 do-while 문 탈출
 * 8. count 값을 출력한다.
 */

let count = 0;
let newNum = input;
do {
    let tenNum = parseInt(newNum / 10); 
    let oneNum = newNum % 10;
    let sum = tenNum + oneNum;
    newNum = (oneNum * 10) +  sum % 10;
    count++;
    //console.log(input, newNum);
} while(input !== newNum)

console.log(count);



