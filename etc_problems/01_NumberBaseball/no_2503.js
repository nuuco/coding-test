//숫자 야구
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

// 브루트 포스로 3개의 숫자 순열을 만든다.
// 하나씩 꺼내서 조건 검사를 한다.
// 입력으로 주어진 것과 비교해서 답이 똑같이 나오면 count++
// count를 출력한다.

//일치하는 숫자 개수 리턴하는 함수
const sameCnt = (numArr_1, numArr_2) => {
    let count = 0;
    for(let num of numArr_1) {
        if(numArr_2.includes(num)) count++;
    }

    return count;
}

//인덱스까지 일치하는 숫자 개수 리턴하는 함수
const strikeCnt = (numArr_1, numArr_2) => {
    let count = 0;
    for(let i = 0; i < numArr_1.length; i++) {
        if(numArr_1[i] === numArr_2[i]) count++;
    }

    return count;
}

//볼 수 리턴하는 함수
const ballCnt = (numArr_1, numArr_2) => {
    return sameCnt(numArr_1, numArr_2) - strikeCnt(numArr_1, numArr_2);
}

//입력으로 들어온 조건과 다 일치하는지 확인하는 함수
const checkCandi = (threeNums, str) => {
    const [n, strike, ball] = str.split(" ").map(el => Number(el));
    const nArr = String(n).split("").map(el => Number(el));

    if(strikeCnt(threeNums, nArr) !== strike) return false;
    if(ballCnt(threeNums, nArr) !== ball) return false;

    return true;
}

// 1 - 9 로 만들수 있는 중복없는 순열 만들기
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const permutation = [];

for(let i of numArr) {
    for(let j of numArr) {
        if(i === j) continue;
        for(let k of numArr) {
            if(i === k || j === k) continue;
            permutation.push([i, j, k]);
        }
    }
}

let count = 0;
for(let el of permutation) {
    let isCandi = true;
    for(let str of arr) {
        if(!checkCandi(el, str)) {
            isCandi = false;
            break;
        }
    }
    if(isCandi) count++;
}

console.log(count);



