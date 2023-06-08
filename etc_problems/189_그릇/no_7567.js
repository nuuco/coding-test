const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';


const input = fs.readFileSync(filePath).toString().trim().split('');

/**
 * 1. result 초기값은 10으로 잡는다.
 * 2. input[1]번 요소부터 가져와서 앞(i - 1)의 문자와 일치하는지 확인한다.
 * 3. 일치한다면 result 에 +5, 불일치한다면 +10을 한다.
 * 4. result 를 출력한다.
*/

let result = 10;

for(let i = 1; i < input.length; i++) {
  let cur = input[i];
  let prev = input[i - 1];

  if(cur !== prev) {
    result += 10;
  } else {
    result += 5;
  }
}

console.log(result);

