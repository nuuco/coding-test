const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [kAndN, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const [k, n] = kAndN.split(' ').map(el => Number(el));

//어렵!!!
/**
 * 1. 랜선 배열을 정렬해 가장 긴 길이를 뽑는다. 
 * 2. 이분 탐색을 할 것이므로, left = 1 (최소값) right = 가장 긴 랜선 이 된다.
 * 3. mid = Math.floor((left + right) / 2); 이 된다.
 * 4. 최댓값을 구하기 위해 max 변수를 만든다.
 * 5. while 문을 돈다. 순회 조건은 left <= right 일 때까지
 * 6. count 변수로 mid로 랜선을 몇 개 만들 수 있는지 저장해준다.
 * 7. 랜선 배열을 순회하며 자른 개수를 count 에 누적해주면 된다.
 * 8. count 가 n 보다 작다면 mid 값은 작아야한다. 작게 잘라야 더 많은 랜선 개수를 만드니까
 *      -> right = mid - 1 로 만들고 mid 다시 left + right 의 절반갑으로 세팅
 * 9. count 가 n 이상이라면 mid는 정답 후보다. 다마나 정답 후보 중 최대값은 아닐 수 있다.
 *      -> max < mid 라면 mid 더 최대값이므로 max에 mid를 할당한다.
 *         count >= n 이라는 것은 mid 가 더 커져도 괜찮을 수 있다는 의미니까
 *         left = mid + 1 로 만들고 mid 다시 left + right 의 절반갑으로 세팅
 *      -> max >= mid 라면 max 가 최종 정답이 된다. while 문을 break
 * 10. max를 출력한다!
 */
const lanArr = arr.map(el => Number(el)).sort((a, b) => b - a);

let left = 1;
let right = lanArr[0];
let mid = Math.floor((left + right) / 2);
let max = 0;

while(left <= right) {
    let count = 0;
    for(let el of arr) {
        count += Math.floor(el / mid);
    }

    if(count < n) {
        right = mid - 1;
        mid = Math.floor((left + right) / 2);
    } else {
        if(max < mid) {
            max = mid;
            left = mid + 1;
            mid = Math.floor((left + right) / 2);
        } else {
            break;
        }
    }
    
}

console.log(max);


