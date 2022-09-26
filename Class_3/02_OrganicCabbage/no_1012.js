const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
t = Number(t);

/** 기본 로직
 * 1. 배추가 1로 표시된 행렬을 만든다.
 * 2. 이 행렬을 순회하면서 배추를 만나면 bfs 를 시작한다.
 * 3. bfs 를 통해 만난 배추는 2로 바꿔준다.
 * 4. bfs 가 한 번 끝났다면 그건 한 구역을 클리어 했다는 의미 -> 구역을 세준다. (count + 1)
 * 5. 이렇게 계속 (2가 아닌) 배추(1)을 만났을 때마다 bfs 를 실행해 준다.
 * 6. 순회가 다 끝나면 누적된 count가 총 구역 개수이다.
 */


//테스트 케이스 별로 이차원 배열 만들기
const testCase = [];
const cabbageNodes = [];
for(let i = 0; i < t; i++) {
    const [m, n, k] = arr.splice(0, 1)[0].split(' ').map(Number);
    const tmp = Array(n);
    cabbageNodes[i] = [];
    for(let i = 0; i < n; i++) {
        tmp[i] = Array(m).fill(0);
    }
    
    const cabbageArr = arr.splice(0, k);
    for(let el of cabbageArr) {
        const [x, y] = el.split(' ').map(Number);
        tmp[y][x] = 1;
        cabbageNodes[i].push([y, x]);
    }

    testCase.push(tmp);
}

//BFS
const bfs = (matrix, start) => { //2차원 배열, 시작 지점[i, j]
    const needVisit = [start];
    while(needVisit.length > 0) {
        let current = needVisit.shift();
        const [x, y] = current;
        if(matrix[x][y] !== 1) continue;
        matrix[x][y] = 2; //방문하면 2로 바꿈
        //4방향 탐색
        //위
        if(x - 1 >= 0 && matrix[x - 1][y] === 1) {
            needVisit.push([x - 1, y]);
        }

        //아래
        if(x + 1 < matrix.length && matrix[x + 1][y] === 1 ) {
            needVisit.push([x + 1, y]);
        }
        
        //왼
        if(y - 1 >= 0 && matrix[x][y - 1] === 1) {
            needVisit.push([x, y - 1]);
        }

        //아래
        if(y + 1 < matrix[0].length && matrix[x][y + 1] === 1 ) {
            needVisit.push([x, y + 1]);
        }
    }
}

const result = [];

//테스트 케이스별로 배추 찾기
for(let t = 0; t < testCase.length; t++) {
    const matrix = testCase[t];
    let count = 0;
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 1) {
                bfs(matrix, [i, j]);
                count++;
            }
        }
    }
    result.push(count);
}

console.log(result.join('\n'));

