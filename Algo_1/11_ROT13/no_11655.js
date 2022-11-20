const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString(); //공백도 출력해야하기 때문에 trim() 제거

// console.log('z'.charCodeAt());
// //a - z : 97 - 122 (26)
// String.fromCharCode(122); 
// //z

const checkUpper = (s) => {
  if(s === s.toUpperCase()) return true;
  else false;
}

let result = '';

for(let char of input) {
  if(/[a-zA-Z]/.test(char)) {
    const tmp = char.toLowerCase();
    let charCode = tmp.charCodeAt() + 13;
    if(charCode > 122) {
      charCode -= 26;
    }
    if(checkUpper(char)) {
      result += String.fromCharCode(charCode).toUpperCase();
    } else {
      result += String.fromCharCode(charCode);
    }

  } else {
    result += char;
  }
}

console.log(result);