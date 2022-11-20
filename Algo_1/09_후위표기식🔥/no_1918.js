const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim();

//엄청 어렵!!!!
// 블로그 참고 https://junghyeonsu.tistory.com/254
/**
 * 1. 알파벳은 바로 answer에 추가, '(' 가 들어오면 스택 추가
 * 2. ')' 가 들어오면 '('를 만날때까지 or 스택이 빌 때까지 pop 후, answer에 추가
 *    그리고 while 문을 빠져나오면 pop 해준다. ('(' 제거)
 * 3. * / 가 들어오면 스택이 비거나, 스택 탑이 * / 일때까지 계속 pop 해준다. 그리고 스택에 현제값을 넣어준다.
 * 4. + - 가 들어오면 스택이 비거나, 스택 탑이 '(' 일 때까지 pop 한다. 그리고 스택에 현제값을 넣어준다.
 * 5. 마지막으로 스택에 남아있는 것들을 전부 pop 해서 answer 에 더해준다.
 */

function solution(string) {
  const split = string.split('');
  const stack = [];
  let answer = '';

  for(let i = 0; i < split.length; i++) {
    const str = split[i];

    if(str === '(') {
      stack.push(str);
    } else if (str === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        answer += stack.pop();
      }
      stack.pop();
    } else if (str === '*' || str === '/') {
      while (stack.length && stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/') {
        answer += stack.pop();
      }
      stack.push(str);
    } else if (str === '+' || str === '-') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        answer += stack.pop();
      }
      stack.push(str);
    } else {
      answer += str;
    }
  }

  while (stack.length) {
    answer += stack.pop();
  }
  
  return answer;
}


const answer = solution(input);
console.log(answer);
