const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const findBingoCount = (input) => {
    //빙고 개수 체크해주는 함수
    const checkBingo = (arr) => {
        let bingoCount = 0;
        //가로 빙고 체크
        //0 1 2 3 4 
        //5 6 7 8 9
        for(let i = 0; i < 5; i++){
            let isBingo = true;
            for(let j = 0; j < 5; j++){
                if(!isBingo) continue;
                if(arr[(i * 5) + j] !== -1){
                    isBingo = false;
                    continue;
                } else if(j === 4) {
                    bingoCount++;
                }
            }
        }
        
        //세로 빙고 체크
        //0 5 10 15 20
        //1 6 11 16 21
        for(let i = 0; i < 5; i++){
            isBingo = true;
            for(let j = 0; j < 5; j++){
                if(!isBingo) continue;
                if(arr[i + (j * 5)] !== -1){
                    isBingo = false;
                    continue;
                } else if(j === 4) {
                    bingoCount++;
                }
            }
        }
    
        //대각선 빙고 체크
        //0 6 12 18 24
        //4 8 12 16 20
        if(
            arr[0] === -1
            && arr[6] === -1
            && arr[12] === -1
            && arr[18] === -1
            && arr[24] === -1
        ){bingoCount++;}
        if(
            arr[4] === -1
            && arr[8] === -1
            && arr[12] === -1
            && arr[16] === -1
            && arr[20] === -1
        ){bingoCount++;}
        

        return bingoCount;
    }

    const board = [];
    for(let i = 0; i < 5; i++){
        board.push(...input[i].split(' ').map(Number));
    }
    
    let count = 0;
    for(let i = 5; i < input.length; i++){
        const tmp = input[i].split(' ').map(Number);
    
        for(let el of tmp){
            const idx = board.findIndex(num => num === el);
            board[idx] = -1;
            count++;
            if(checkBingo(board) >= 3){
                return count;
            }
        }
    }

    return -1;
}

console.log(findBingoCount(input));