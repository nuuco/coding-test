// 이렇게 쓰면 메모리 초과가 뜬다.
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(el => Number(el));
arr.sort((a, b) => a - b)
console.log(arr.join('\n'));
//이 문제는 메모리 효율적으로 풀어도 js 는 메모리초과가 난다.


//그래서 그냥 파이썬으로 풀었다.
// import sys

// n = int(sys.stdin.readline())
// list = [0] * 10001

// for _ in range(n):
//     list[int(sys.stdin.readline())] += 1

// for i in range(10001):
//     if list[i] != 0:
//         for j in range(list[i]):
//             print(i)
