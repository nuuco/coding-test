const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const n = Number(fs.readFileSync(filePath).toString().trim());

const memo = [BigInt(1), BigInt(1)];

const aux = (n) => {
  if(memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = BigInt(n) * aux(n - 1);
  return memo[n];
}

let count = 0;
const fac = String(aux(n));
for(let i = fac.length - 1; i >= 0; i--) {
  if(fac[i] === '0') {
    count++;
  } else break;
}

console.log(count);