const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (testCase) => {
    const [method, num, arr] = testCase;
    const numArr = num === "0" ? [] : arr.slice(1, arr.length - 1).split(',');

    let isReverse = false;

    for(let char of method) {
        switch(char) {
            case "R":
                //numArr.reverse(); //리버스가 있으면 시간초과 난다.
                isReverse = !isReverse;
                break;
            case "D":
                if(numArr.length > 0 && !isReverse) {
                    numArr.shift();
                } else if (numArr.length > 0 && isReverse) {
                    numArr.pop();
                } else {
                    return "error";
                }
                break;
        }
    }

    if(isReverse) numArr.reverse();
    return `[${numArr.join(',')}]`;
}

const result = [];
while(arr.length > 0) {
    const answer = solution(arr.splice(0, 3));
    result.push(answer);
}

console.log(result.join('\n'));

