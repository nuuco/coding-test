const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const checkPw = (pw) => {
    if(!/[aeiou]/.test(pw)) return false;
    if(/[aeiou]{3}|[^aeiou]{3}/.test(pw)) return false;
    if(/([^eo])\1/.test(pw)) return false;

    return true;
}

const result = []
for(let el of input){
    if(el === 'end') break;
    
    if(checkPw(el)){
        result.push(`<${el}> is acceptable.`);
    } else {
        result.push(`<${el}> is not acceptable.`);
    }
}

console.log(result.join('\n'));