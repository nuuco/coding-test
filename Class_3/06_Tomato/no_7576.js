const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const [m, n] = t.split(' ').map(Number);
const box = [];
for(let i = 0; i < arr.length; i++) {
    box[i] = arr[i].split(' ').map(Number);
}


const bfs = (i, j, matrix, needVisit) => {
    matrix[i][j] = 2;
    //위
    if(i - 1 >= 0 && matrix[i - 1][j] === 0) {
        needVisit.push([i - 1, j]);
        matrix[i - 1][j] = 1;      
    }
    //아래
    if(i + 1 < matrix.length && matrix[i + 1][j] === 0) {
        needVisit.push([i + 1, j]);
        matrix[i + 1][j] = 1;      
    }
    //좌
    if(j - 1 >= 0 && matrix[i][j - 1] === 0) {
        needVisit.push([i , j - 1]);
        matrix[i][j - 1] = 1;      
    }
    //우
    if(j + 1 < matrix[0].length && matrix[i][j + 1] === 0) {
        needVisit.push([i, j + 1]);
        matrix[i][j + 1] = 1;      
    }
}

let day = -1;

//초기값 중 1 좌표 넣기
let needVisit = [];
for(let i = 0; i < box.length; i++) {
    for(let j = 0; j < box[0].length; j++) {
        if(box[i][j] === 1) {
            needVisit.push([i, j]);
        }
    }
}

while(needVisit.length > 0) {
    const current = [...needVisit];  //요게 포인트
    needVisit = []; //다 썼으니 비워줌
    for(let el of current) {
        bfs(el[0], el[1], box, needVisit); //있으면 다시 채워줌
    }
    // console.table(box);
    day++;
    
}

let isSuccess = true;
for(let i = 0; i < box.length; i++) {
    if(box[i].includes(0)){
        isSuccess = false;
        break;
    }
}

if(isSuccess) console.log(day);
else console.log(-1);