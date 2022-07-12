const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(el => Number(el));

// 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.
// k층의 n호에 살려면 자신의 아래(k-1)층의 1호부터 n호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다
// 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력
// 1 ≤ k, n ≤ 14

for(let x = 0; x < arr.length; x += 2) {
    const k = arr[x];
    const n = arr[x + 1];
    let tmp = [];
    let tmp_2 = [];
    for(let i = 0; i < k; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0) tmp.push(j+1);
            else {
                tmp_2[j] = tmp.slice(0, j + 1).reduce((acc, cur) => acc + cur);
            }
        }
        tmp = tmp_2.length === 0 ? tmp : tmp_2.slice();
        tmp_2 = [];
    }
    
    let result = tmp.slice(0, n).reduce((acc, cur) => acc + cur);
    
    console.log(result);
}

