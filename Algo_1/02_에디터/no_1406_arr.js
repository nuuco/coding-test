const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [str, n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

//배열을 이용한 풀이 -> 시간 초과
const strArr = str.split('');
let cursor = str.length;

const oper = (command) => {
  if(command === 'L') {
    if(cursor > 0) cursor--;  //0 은 무시
  } else if(command === 'D') {
    if(cursor <= strArr.length) cursor++; //length + 1 은 무시
  } else if(command === 'B') {
    if(cursor > 0) {
      strArr.splice(cursor - 1, 1);
      cursor--; //삭제로 인한 이동
    }
  } else {
    const [p, char] = command.split(' ');
    strArr.splice(cursor, 0, char);
    cursor++; //추가로 인한 이동
  }
}

for(let command of arr) {
  oper(command);
}

console.log(strArr.join(''));