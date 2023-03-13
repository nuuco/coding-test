const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').sort();

const solution = (arr) => {
    const firstChar = {};

    for(let el of arr) {
        if(firstChar[el[0]]) {
            firstChar[el[0]]++; 
        } else {
            firstChar[el[0]] = 1;
        }
    }

    const result = [];
    for(let key in firstChar) {
        if(firstChar[key] >= 5) {
            result.push(key);
        }
    }

    if(result.length > 0) {
        result.sort();
        return result.join('');
    } else {
        return 'PREDAJA';
    }
}

console.log(solution(arr));