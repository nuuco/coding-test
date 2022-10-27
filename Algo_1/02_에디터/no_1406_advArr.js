const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [str, n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

//참고 : https://velog.io/@ptj1554/%EB%B0%B1%EC%A4%80-1406-%EC%97%90%EB%94%94%ED%84%B0-NodeJs
//그냥 배열을 사용할 경우
//splice 등을 이용한 삽입, shift(), unshift()를 사용시 시간초과 발생
//가능한 배열 인덱스가 밀리면 시간 초과...

//left, right 배열을 만들고 스택처럼 사용
//반복문 완료 후 right 배열에 있는 원소들을 pop()으로 left 배열에 push()

let left = [];
let right = [];

for(let char of str) {
  left.push(char);
}

const oper = (command) => {
  if(command === 'L') {
    if(left.length > 0) {
      right.push(left.pop());
    }
  } else if(command === 'D') {
    if(right.length > 0) {
      left.push(right.pop());
    }
  } else if(command === 'B') {
    if(left.length > 0) {
      left.pop();
    }
  } else {
    const [, char] = command.split(' ');
    left.push(char);
  }
}

for(let command of arr) {
  oper(command);
}

while(right.length > 0) {
  left.push(right.pop());
}

console.log(left.join(''));