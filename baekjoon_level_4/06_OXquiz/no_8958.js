const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

//arr[0] === 'OOXXOXXOOO'
//scoreArr = [1, 2, 0, 0, 1, 0, 0, 1, 2, 3 ]
//score = scoreArr 요소들의 합 = 10
for(let test of arr){
    let scoreArr = [];
    scoreArr[0] = test[0] === 'O' ? 1 : 0;
    for(let i = 1; i < test.length; i++) {
        if(test[i] === 'O') {
            scoreArr[i] = scoreArr[i - 1] + 1;
        } else {
            scoreArr[i] = 0;
        }
    }
    let score = scoreArr.reduce((acc, cur) => acc + cur);
    console.log(score);
}

