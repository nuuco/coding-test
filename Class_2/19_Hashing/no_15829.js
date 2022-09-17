const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, str] = fs.readFileSync(filePath).toString().trim().split('\n');
const r = BigInt(31);
const m = BigInt(1234567891);

const hashing = (str) => {
    let result = BigInt(0);
    for(let i = 0; i < str.length; i++) {
        let num = BigInt(str[i].charCodeAt(0) - 96);

        let n = 1;
        while(n <= i) {
            num *= r;
            num %= m;
            n++;
        }
        result += num;
    }


    return result % m;
}

console.log(String(hashing(str)));

