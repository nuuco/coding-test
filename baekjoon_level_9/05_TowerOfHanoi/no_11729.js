const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

let count = 0;
const result = [];
const hanoi = (n, from, to, other) => {
    if(n === 0) return;
    hanoi(n - 1, from, other, to);
    count++;
    result.push(`${from} ${to}`);
    hanoi(n - 1, other, to, from);
}

hanoi(n, 1, 3, 2);
console.log(count);
console.log(result.join('\n'));


/* 기본적인 하노이 풀이 방식
//파라미터는 차례대로, 
//1) 원판 개수, 2) 출발지 기둥 번호, 3) 목적지 기둥 번호, 4) 나머지 기둥 번호
const hanoi = (n, from, to, other) => {
    //base case
    if(n === 0) return; //0개일 때 그냥 리턴

    //recursive case
    //1. 마지막 원판을 제외한 나머지 원판들(n - 1개)를 출발지 기둥에서 other 기둥으로 옮긴다.
    hanoi(n - 1, from, other, to);

    //2. 마지막 원판을 목적지 기둥으로 옮긴다.
    console.log(`${from} ${to}`);

    //3. 마지막 원판을 제외한 나머지 원판들(n - 1개)를 other 기둥에서 목적지 기둥으로 옮긴다.
    hanoi(n - 1, other, to, from);
}

hanoi(n, 1, 3, 2);

참고 자료 : 얄팍한 코딩사전 https://www.youtube.com/watch?v=aPYE0anPZqI
*/