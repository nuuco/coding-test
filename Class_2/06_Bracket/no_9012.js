const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

//1. 문자열을 순회한다.
//2. 우선 첫 문자는 '('이여야 하고, 마지막 문자는 ')' 이여야한다. 아니면 바로 "NO";
//3. 2를 통과했으면 문자열을 순회하며 '(' 을 만나면 count++, ')'를 만나면 count-- 한다.
//4. 단, count가 음수가 되면 안된다. 음수가 되면 바로 "NO";
//5. 다 통과하고 난 뒤 count === 0 이라면 "YES";

const result = [];
for(let el of arr) {
    if(el[0] !== '(' || el[el.length - 1] !== ')' ) {
        result.push("NO");
        continue;
    }
    let isVPS = true;
    let count = 0;
    for(let char of el) {
        if(char === '(') count++;
        else if (char === ')') count--;
        // ())(() -> 이런 예외 처리하려고 음수는 걸러준다.
        if(count < 0) break;
    }

    if(count !== 0) isVPS = false;
    
    if(isVPS) result.push("YES");
    else result.push("NO");
}

console.log(result.join('\n'));