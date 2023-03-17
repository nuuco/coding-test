const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim();

/**
 * 1. 결과물은 항상 5줄이므로 길이가 5인 result를 만든다.
 * 2. input 문자를 for문으로 돌면서 한 문자를 돌때마다 result의 0 ~ 4 인덱스에 모두 스트링을 추가한다.
 * 3. 예를 들면 result[0] += '..#..';
 * 4. 이때 다음 프레임과 끝 세로 한 줄이 항상 곂치므로 값을 추가하기 전에 끝에 한 문자를 제거해줘야함. -> .slice(0, -1))
 * 5. 단, 4를 할 때 앞 인덱스가 3의 배수여서 웬디프레임이었다면 추가하는 첫줄의 #을 *로 넣을 것.
 * 6. result.join('\n')해서 결과값 출력
 */

const result = new Array(5).fill('');
for(let i = 1; i <= input.length; i++){
    const frame = i % 3 === 0 ? '*' : '#';
    const firstLineFrame = i !== 1 && (i % 3 === 1 || i % 3 === 0) ? '*' : '#';
    const char = input[i - 1];
    result[0] = result[0].slice(0, -1) + `..${frame}..`;
    result[1] = result[1].slice(0, -1) + `.${frame}.${frame}.`;
    result[2] = result[2].slice(0, -1) + `${firstLineFrame}.${char}.${frame}`;
    result[3] = result[3].slice(0, -1) + `.${frame}.${frame}.`;
    result[4] = result[4].slice(0, -1) + `..${frame}..`;
}

console.log(result.join('\n'));