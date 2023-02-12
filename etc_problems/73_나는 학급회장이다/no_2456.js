const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

class Candi {
    constructor(num) {
        this.num = num;
        this.scoreOneCount = 0;
        this.scoreTwoCount = 0;
        this.scoreThreeCount = 0;
        this.sum = 0;
    }
}

const p1 = new Candi(1);
const p2 = new Candi(2);
const p3 = new Candi(3);

const checkCount = (candi, score) => {
    if(score === 1){
        candi.scoreOneCount++;
    } else if(score === 2){
        candi.scoreTwoCount++;
    } else if(score === 3){
        candi.scoreThreeCount++;
    }

    candi.sum += score;
}

const getWinner = (candi1, candi2, candi3) => {
    const candiArr = [candi1, candi2, candi3];

    candiArr.sort((a, b) => {
        let tmp = b.sum - a.sum;
        if(tmp !== 0) return tmp;
        else {
            tmp = b.scoreThreeCount - a.scoreThreeCount;
        }

        if(tmp !== 0) return tmp;
        else {
            tmp = b.scoreTwoCount - a.scoreTwoCount;
        }

        if(tmp !== 0) return tmp;
        else {
            tmp = b.scoreOneCount - a.scoreOneCount;
        }

        return tmp;
    });

    if(
        candiArr[0].sum === candiArr[1].sum
        && candiArr[0].scoreThreeCount === candiArr[1].scoreThreeCount
        && candiArr[0].scoreTwoCount === candiArr[1].scoreTwoCount
        && candiArr[0].scoreOneCount === candiArr[1].scoreOneCount
    ) {
        return [0, candiArr[0].sum];
    }

    return [candiArr[0].num, candiArr[0].sum];
}

for(let el of arr) {
    const [a, b, c] = el.split(' ').map(Number);

    checkCount(p1, a);
    checkCount(p2, b);
    checkCount(p3, c);
}

const result = getWinner(p1, p2, p3);

console.log(result.join(' '));


