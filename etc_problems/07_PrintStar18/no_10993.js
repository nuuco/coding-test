const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());



const aux = (n) => {
    if(n === 1) {
        return ["*"];
    }
    const result = [];
    //짝수일때
    if(n % 2 === 0) {
        const prevStep = aux(n - 1); //이전 단계의 결과 = 배열임
        result.push("*".repeat(2 * (2**n - 1) - 1));
        for(let i = 1; i <= prevStep.length; i++) {
            const first = " ".repeat(i) + "*" + " ".repeat(prevStep.length - i);
            const second = prevStep[i - 1];
            const third = " ".repeat(2 * (prevStep.length - i)) + "*";
            result.push(first + second + third);
        }
        for(let i = 1; i < prevStep.length; i++) {
            const line = " ".repeat(prevStep.length + i) + "*" + " ".repeat(2**n - 3 - (2 * i)) + "*";
            result.push(line);
        }
        result.push(" ".repeat(2**n - 2) + "*");
        
    } else {
        const prevStep = aux(n - 1); //이전 단계의 결과 = 배열임

        result.push(" ".repeat(2**n - 2) + "*");

        for(let i = prevStep.length - 1; i > 0; i--) {
            const line = " ".repeat(prevStep.length + i) + "*" + " ".repeat(2**n - 3 - (2 * i)) + "*";
            result.push(line);
        }

        for(let i = 1; i <= prevStep.length; i++) {
            const first = " ".repeat(prevStep.length - i + 1) + "*" + " ".repeat(i - 1);
            const second = prevStep[i - 1];
            const third = " ".repeat(2 * i - 2) + "*";
            result.push(first + second + third);
        }
        result.push("*".repeat(2 * (2**n - 1) - 1));
    }

    return result;
}


/**
 * n -> line 위
 * 1 -> 1 아래 1
 * 2 -> 3 위 5
 * 3 -> 7 아래 13
 * 4 -> 15(1,7,7) 위 가장긴변: 2*15 - 1
 * n -> 2**n - 1 가장긴변: 2(2**n - 1) - 1 
 * 2(2**n / 2 - 1) - 1
 * 2**n - 3 - (2 * i)
 */

console.log(aux(n).join('\n'));