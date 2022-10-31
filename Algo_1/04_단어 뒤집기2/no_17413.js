const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const reverse = (word) => {
  let reverseWord = '';
  for(let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}


let result = '';
let isTag = false;
let word = '';

for(let i = 0; i < input.length; i++) {
  if(input[i] === '<') {
    isTag = true;
  }

  if(input[i] === '>') {
    result += input[i];
    isTag = false;
  }

  if(isTag) {
    result += input[i];
  } else if(input[i] !== '>') { 
    if(input[i] !== ' ' && input[i] !== '<') {
      word += input[i];
    }
    if(i === input.length - 1 || input[i + 1] === ' ' || input[i + 1] === '<') {
      result += reverse(word);
      word = '';
    }

    if(input[i] === ' ') {
      result += ' ';
    }
  }

}

console.log(result);