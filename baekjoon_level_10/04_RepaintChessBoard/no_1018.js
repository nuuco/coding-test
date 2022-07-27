const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [input, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.split(' ').map(el => Number(el)); 
//N : 세로, M: 가로

//8×8 크기의 체스판으로 만들때, 새로 칠해야하는 칸 수 구하기

// [n, m] 을 시작 칸으로 8 * 8 을 잘른후 
// arr 원본 배열, n 세로 시작칸, m 가로 시작칸, 'B'로 시작 여부
const checkBoard = (arr, n, m, isBlack) => {
    let count = 0;
    for(let i = n; i < n + 8; i++) {
        let first;
        if(i % 2 === 0) first = isBlack ? 'B' : 'W'; //B 부터 시잘 할 때
        else first = isBlack ? 'W' : 'B';
        for(let j = m; j < m + 8; j++) {
            if(first !== arr[i][j]) count++;
            first = first === 'B' ? 'W' : 'B';
        }
    }

    return count;
}


let result = 32;

//N * M 칸 보드에서 8 * 8 보드를 만들려면 시작 칸이 될 수 있는 칸은
//세로 i: 0 ~ (N - 8), 가로 j: 0 ~ (M - 8)
for(let i = 0; i <= N - 8; i++) {
    for(let j = 0; j <= M - 8; j++) {
        //[i, j] 에서 부터 8 * 8 칸을 자른다고 하면 
        //[i, j] ~ [i, j + 7], [i + 1, j] ~ [i + 1, j + 7] ... 이렇게
        // 8 * 8 칸을 모두 확인해준다.
        const startWithB = checkBoard(arr, i, j, true); //'B'로 시작했을 때
        const startWithW = checkBoard(arr, i, j, false);//'W'로 시작했을 때
        //둘 중에 작은 걸 저장한 뒤
        const tmp = startWithB <= startWithW ? startWithB : startWithW;

        //result 값보다 작으면 result 값을 갱신
        result = result <= tmp ? result : tmp;
    }
}

console.log(result);



