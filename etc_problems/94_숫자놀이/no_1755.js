const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [m, n] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = (m, n) => {
    const oneNumToStr = (nStr) => {
        switch(nStr) {
            case "0":
                return "zero";
            case "1":
                return "one";
            case "2":
                return "two";
            case "3":
                return "three";
            case "4":
                return "four";
            case "5":
                return "five";
            case "6":
                return "six";
            case "7":
                return "seven";
            case "8":
                return "eight";
            case "9":
                return "nine";
        }
    }

    const resultStr = [];
    for(let i = m; i <= n; i++) {
        let str = '';
        const nArr = String(i).split('');
    
        for(let el of nArr){
            str += oneNumToStr(el);
        }
        str += ' ' + String(i);
        resultStr.push(str);
    }
    
    resultStr.sort();
    
    const result = resultStr.map(el => el.split(' ')[1]);
    
    const answerStr = [];
    for(let i = 0; i < result.length; i = i + 10){
        answerStr.push(result.slice(i, i + 10).join(' '));
    }

    return answerStr.join('\n');
}

console.log(solution(m, n));






