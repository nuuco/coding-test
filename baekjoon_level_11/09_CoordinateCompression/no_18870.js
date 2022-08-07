//어렵!!!
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s+/).map(el => Number(el));

//시간 초과 & 메모리 초과 안나게 짜자...
//=> 요점은 중복된 값이 있을때 idx값을 다시 찾는 게 아니라 저장된 값을 가져오는 것!
//1. 우선 Set으로 중복을 제거한 뒤, 다시 배열로 만들어 오름차순으로 정렬한다. (sorted)
//2. Map 을 생성하고 키:값 쌍이 sorted의 요소값 : idx 값 되게 넣어준다.
//3. arr 요소를 순회하며 해당 요소를 키로 하는 값을 출력해준다.

const sorted = [...new Set(arr)].sort((a, b) => a - b);
const map = new Map();

for(let i = 0; i < sorted.length; i++) {
    map.set(sorted[i], i);
}

let result = "";
for(let el of arr) {
    result += map.get(el) + ' ';
}

console.log(result.trim());


//1. Try 1 : 시간 초과 난 풀이
// const idxArr = [...new Set(arr)].sort((a, b) => a - b);

// let result = "";
// for(let i = 0; i < arr.length; i++) {
//     result += idxArr.findIndex(el => el === arr[i]) + ' ';
// }

// console.log(result.trim());


//2. Try 2 : 시간 초과 안 나게 짜자! -> 메모리 초과 난 풀이...
// let result = "";
// const idxArr = arr.map(el => {
//     return new Set(arr.filter(item => item < el)).size;
// })
// console.log(idxArr.join(' '));