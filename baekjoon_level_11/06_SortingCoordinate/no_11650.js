const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, ...tmp] = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = tmp.map(el => el.split(' ').map(n => Number(n)));

// 시간 초과 나는 naive solution-1
// arr.sort((a, b) => a[1] - b[1]); //y 값 기준으로 먼저 정렬한 뒤
// arr.sort((a, b) => a[0] - b[0]); //x 값 기준으로 정렬하면 x 우선 정렬 후, y 순 정렬이 된다.

// naive solution-2
// arr.sort((a, b) => {
//     if(a[0] === b[0]) {
//         return a[1] - b[1];
//     }
//     return a[0] - b[0];
// })

// let resultMsg = "";
// for(let el of arr) {
//     resultMsg += el.join(' ') + "\n";
// }

// console.log(resultMsg);



//퀵 정렬
const quickSort = (arr) => {
    if(arr.length <= 1) return arr;

    let pivot = arr[0];
    let left = [];
    let right = [];
    
    for(let i = 1; i < arr.length; i++) {
        if(arr[i][0] < pivot[0] || (arr[i][0] === pivot[0] && arr[i][1] < pivot[1])) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    return [...left, pivot, ...right];
}

const result = quickSort(arr);

//시간 초과 나서 한꺼번에 출력으로 바꿈
let resultMsg = "";
for(let el of result) {
    resultMsg += el.join(' ') + "\n";
}

console.log(resultMsg);