const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [num, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = num.split(' ').map(el => Number(el));

const S = arr.slice(0, n);
const sMap = new Map();
for(let el of S) {
    sMap.set(el, true);
}

const mArr = arr.slice(n);
const result = mArr.reduce((acc, cur) => {
    if(sMap.get(cur)) return acc + 1;  //includes 로 검사하는 것보다 훨씬 빠르다. O(1)
    return acc;
}, 0);

console.log(result);

//확실히 검사 빠르게 해야될 때는 객체나 맵(맵이 key 로 쓸 수 있는 자료형이 많아서 더 좋음) 유용하다.
// 있는지 검사할 때의 시간복잡도가 적기 때문!