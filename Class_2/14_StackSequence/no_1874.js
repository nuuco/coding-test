const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = (n, arr) => {
    let num = 1;
    const stack = [];
    let result = "";
    stack.push(num);
    result += "+" + '\n';

    let cur;
    while(arr.length > 0) {
        if(cur === undefined) cur = arr.shift();;
        if(cur === stack[stack.length - 1]) {
            stack.pop();
            result += "-" + '\n';
            cur = undefined;
        } else if (num <= n) {
            num++;
            stack.push(num);
            result += "+" + '\n';
        } else {
            return "NO";
        }
    }

    return result;
}

console.log(solution(n, arr));

/**
 * arr 마지막 요소에 대한 처리가 안 이루어지는 것을 발견
 * arr 요소가 하나 남았을 때, stack 에서 pop한 뒤 바로 cur = arr.shift() 하면
 * arr.length 가 0 이라 다음 반복에서 while 조건문에 걸리기 때문에 일단 cur = undefined 해놓고, 반복문 시작할 때 arr.shift() 를 재할당하였다. 
 */



