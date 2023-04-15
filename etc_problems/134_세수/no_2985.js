const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [a, b, c] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
let result = '';
// 앞이 = 일때
if(b + c === a) {
  result = a + '=' + b + '+' + c;
}
else if(b - c === a) {
  result = a + '=' + b + '-' + c;
}
else if(b * c === a) {
  result = a + '=' + b + '*' + c;
}
else if(b / c === a) {
  result = a + '=' + b + '/' + c;
}

//뒤가 =일때
else if(a + b === c) {
  result = a + '+' + b + '=' + c;
}
else if(a - b === c) {
  result = a + '-' + b + '=' + c;
}
else if(a * b === c) {
  result = a + '*' + b + '=' + c;
}
else if(a / b === c) {
  result = a + '/' + b + '=' + c;
}

console.log(result);