const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const arr = fs.readFileSync(filePath).toString().trim().split("");

let result = 0;
for(let el of arr) {
    switch(el){
        case '1':
            result += 2;
            break;
        case 'A': case 'B': case 'C':
            result += 3;
            break;
        case 'D': case 'E': case 'F':
            result += 4;
            break;
        case 'G': case 'H': case 'I':
            result += 5;
            break;
        case 'J': case 'K': case 'L':
            result += 6;
            break;
        case 'M': case 'N': case 'O':
            result += 7;
            break;
        case 'P': case 'Q': case 'R': case 'S':
            result += 8;
            break;
        case 'T': case 'U': case 'V':
            result += 9;
            break;
        case 'W': case 'X': case 'Y': case 'Z':
            result += 10;
            break;
        case '0':
            result += 11;
            break;
    }
}
console.log(result)