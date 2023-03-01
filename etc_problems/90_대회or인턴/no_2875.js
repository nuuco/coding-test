const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [n, m, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

//n : 여
//m : 남
//k : 인턴쉽
//여 2, 남 1 팀 구성

const solution = (n, m, k) => {
    let teamCnt = m;

    while(teamCnt >= 0) {
        if(teamCnt === 0) return teamCnt;

        if(n < teamCnt * 2) {
            teamCnt--;
            continue;
        }
    
        if(n - (teamCnt * 2) + m - teamCnt < k) {
            teamCnt--
            continue;
        }
    
        return teamCnt;
    }    
}

console.log(solution(n, m, k));