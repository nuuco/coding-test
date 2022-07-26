const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(' ').map(el => Number(el));
}

const result = [];  //결과를 저장할 배열

for(let i = 0; i < arr.length; i++) {
    result[i] = arr.filter(el => {
        return arr[i][0] < el[0] && arr[i][1] < el[1]
        //몸무게가 더 크다면, 신장도 큰지 확인해서 둘다 true 면 새배열에 넣어라
    }).length + 1;
}

console.log(result.join(' '));