const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, l] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

let tape = 0;
let count = 0;
for(let i = 0; i < arr.length; i++) {
    if(tape === 0) {
        tape = 1;
    }else {
        const diff = arr[i] - arr[i - 1];
        tape += diff;
    }

    if(tape === l) {
        count++;
        tape = 0;
    } else if(tape > l) {
        count++;
        tape = 1;
    }
}

if(tape > 0) {
    count++;
}

console.log(count);

/**
 * 풀이 순서
 * 1. 처음 - 원소 하나를 받는다.
 * 2. 사용한 tape 길이는 1이다.
 * 3. tape의 길이가 l과 같으면 count++ 하고 tape = 0한다.
 * 4. 두번째 원소를 받는다. 
 * 5. 사용한 테이프의 길이는 tape가 0 이라면 tape = 1이고 아니라면
 *    const diff = arr[i] - arr[i - 1];
 *    tape += diff; 이다.
 * 6. tape의 길이가 l과 같으면 count++ 하고 tape = 0한다.
 * 7. tape의 길이가 l보다 크면 count++ 하고 tape = 1이다.
 * 8. tape의 길이가 l보다 작으면 그대로 통과
 * 9. 위를 계속 반복한다.
 * 10. 마지막 원소까지 끝난 후, tape가 0이 아니라면 count++ 한다.
 */