const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

/**
 * 1. 결과값을 저장할 변수(count)를 만들고, 
 *    arr의 요소인 문자열을 하나씩 꺼내 검사한다.
 * 2. 우선 문자열이 그룹단어인지 보려면 앞서 검사한 단어를 기억하고 있어야한다.
 * 3. 앞 문자열을 저장할 변수 (prev)를 만든다.
 *    그리고 해당 문자열이 그룹 단어인지 저장하는 boolean 변수를 만든다. (isGroupWord)
 * 4. 검사한 단어를 기억할 배열을 만든다. (charArr)
 * 3. 문자열을 한 문자씩 순회한다.
 * 4. prev와 같다면 통과, 다르다면 해당 문자가 charArr에 있는지 확인하고
 *    없다면 charArr에 해당 문자를 추가하고, prev를 해당 문자로 바꾼다.
 *    있다면 그 문자열은 그룹 단어가 아니다. 다음 문자열로 넘어간다.
 * 5. 이런식으로 모든 문자 검사해서 마지막 문자까지 확인했다면 그 문자열은 그룹 단어다.
 *    count 를 1 증가시키고, 다음 문자열로 넘어간다.
 * 6. 순회를 다 돈 뒤, count 를 출력한다.
 */

let count = 0;

for(let str of arr) {
    const charArr = [str[0]];
    let prev = str[0];
    let isGroupWord = true;
    
    for(let char of str) {
        //앞 단어랑 같은 경우
        if(prev === char) continue;
        
        //앞 단어와 다르지만 이전에 나온 문자가 아닌 경우
        if(!charArr.includes(char)) {
            charArr.push(char);
            prev = char;
            continue;
        }
    
        //앞 단어와 같고 이전에 나온 문자인 경우
        isGroupWord = false;
        break;
    }

    if(isGroupWord) count++;
}


console.log(count)



