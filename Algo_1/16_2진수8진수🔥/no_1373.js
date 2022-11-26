const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('');

//참고 블로그 : https://gigibean.tistory.com/33
//비트 연산을 해야됐다. 비트 연산자에 대한 이해가 부족해서 힘들었음....

const solution = (input) => {
  let result = [];
  // 비트 연산자 사용
  while (input.length) {
    let tmp = 0;
    for (let i = 0; i < 3; i++) {
      let eachchar = parseInt(input.pop());
      if (!eachchar) continue;
      tmp += 1 << i;
    }
    result.push(tmp);
  }
  return result.reverse().join("");
}

console.log(solution(input));