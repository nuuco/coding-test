const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('');

const solution = (arr) => {
  let result = [];
  while(arr.length > 0) {
    let tmp = Number(arr.pop()).toString(2);
    if(tmp.length < 3 && arr.length > 0) {
      tmp = '0'.repeat(3 - tmp.length) + tmp;
    }

    result.push(tmp);
  }
  return result.reverse().join('');
}

console.log(solution(input));
