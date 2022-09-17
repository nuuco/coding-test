const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m, b] = t.split(' ').map(Number);

/**
 * 1. 땅옾이를 모두 하나의 배열에 넣어준다. (어차피 좌표 필요 없음!)
 * 2. 우선은 블럭을 깎아주는 걸 먼저 수행해야 한다. -> 그래야 나중에 블럭 올릴 때 인벤에 있는 블럭이 안 모자라서
 * 3. 때문에 1의 배열을 내림차순으로 정렬한다.
 * 4. 기준이 될 땅 높이는 배열의 최솟값 ~ 최댔값의 사이값(i)이다.
 * 5. 최솟값 ~ 최댓값 사이 값을 기준값으로 정하고 1씩 올려가며 순회하면서 time 을 계산한다.
 * 6. 이때 배열의 요소가 기준값보다 크다면 블럭 하나 깎는데 2초가 걸리고 그 블럭이 인벤토리에 추가된다는 것에 유념한다.
 * 7. 요소가 기준값보다 작다면 차이가 인벤의 블럭 개수 보다 작을 시 인벤의 블럭 개수를 그만큼 줄이고 시간은 한 블럭당 1초가 소요된다.
 *     => 만약 인벤에 있는 블럭 개수로 땅 높이를 채울 수 없다면 그 기준값은 정답이 아니다. 다음 기준값으로 넘어간다.
 * 
 * 내가 처음에 놓친 포인트는 
 * 1) 블럭을 깍은 수 만큼 인벤토리에 저장된다! 그 블럭은 블럭을 쌓을 때 사용할 수 있다!
 * 2) 평탄화 블럭 높이가 꼭 현재 배열의 높이가 아닐 수 있다.
 */


const ground = [];
for(let el of arr) {
    ground.push(...el.split(' ').map(Number));
}

ground.sort((a, b) => b - a);

const solution = (arr) => {
    let minTime = Number.MAX_SAFE_INTEGER;
    let answerTarget = null;
    const min = arr[arr.length - 1];
    const max = arr[0];

    for(let i = max; i >= min; i--) {
        const target = i;
        let time = 0;
        let block = b;
        let isSolved = true;

        for(let el of arr) {
            if(el > target) {
                time += (el - target) * 2;
                block += el - target;
                continue;
            } 
            //el <= target 인 경우
            const pileBlock = target - el;
            if(pileBlock <= block) {
                time += pileBlock;
                block -= pileBlock;
            } else {
                isSolved = false;
                break;
            }
        }
        if(isSolved && time < minTime) {
            minTime = time;
            answerTarget = target;
        }
    }

    return [minTime, answerTarget];
}

console.log(solution(ground).join(' '));
