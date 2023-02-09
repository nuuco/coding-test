const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b] = fs.readFileSync(filePath).toString().trim().split('\n');

/**
 * 풀이 방법
 * 1. a 단어를 한글자씩 쪼개서 객체에 넣는다. 이때 기본값은 1이고 여러개라면 값을 증가시킨다. (obj)
 * 2. b 단어를 한글자씩 쪼개서 obj에 있는 글자인지 검사한다.
 * 3. 존재하는 글자면 -> 값 - 1, 값이 0 이 되면 그 키값은 삭제한다.
 * 4. 존재하지 않는 글자면 -> count +1
 * 5. b를 다 순회하고 나서 obj 값을 다 더해준 것을 count 에 더해줌.
 */

const obj = {};

for(let char of a) {
    if(!obj[char]) {
        obj[char] = 1;
    } else {
        obj[char]++;
    }
}

let count = 0;

for(let char of b) {
    if(obj[char]) {
        obj[char]--;
        if(obj[char] === 0) {
            delete obj[char];
        }
    } else {
        count++;
    }
}

for(let key in obj) {
    count += obj[key];
}

console.log(count);