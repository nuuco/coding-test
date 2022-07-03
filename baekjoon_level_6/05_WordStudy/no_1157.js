const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().toUpperCase(); //모두 대문자로 변환

const wordRepeat = {};
const check = {max: 0, maxWord: ''};

for(let char of input) {
    if(wordRepeat[char] !== undefined) wordRepeat[char]++;
    else wordRepeat[char] = 1;
    if(check.max < wordRepeat[char]) {
        check.max = wordRepeat[char];
        check.maxWord = char;
    }
}

//최대 반복 횟수인 알파벳이 여러개 있는지 확인하기
const isDouble = Object.values(wordRepeat).filter(el => el === check.max).length >= 2;

if(isDouble) console.log('?');
else console.log(check.maxWord);