const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split('');
let prevIsVowel = false;

for(let i = 0; i < input.length; i++) {
  if(input[i] === 'p' && prevIsVowel) {
    input[i] = '';
    input[i + 1] = '';
    i++;
    prevIsVowel = false;
  }
  if(/[aeiou]/.test(input[i])) {
    prevIsVowel = true;
  } else {
    prevIsVowel = false;
  }
}

console.log(input.join(''));