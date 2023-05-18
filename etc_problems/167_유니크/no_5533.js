const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const num = Number(t);
const players = [];
const games = [[], [], []];  //각 게임의 플레이어별 점수가 들어있다.
for(let i = 0; i < num; i++) {
  players[i] = input[i].split(' ').map(Number);

  games[0].push(players[i][0]);
  games[1].push(players[i][1]);
  games[2].push(players[i][2]);
}

const scores = new Array(num).fill(0);
for(let i = 0; i < num; i++) {
  for(let j = 0; j < 3; j++) {
    if(games[j].filter((el) => el === games[j][i]).length === 1) {
      scores[i] += games[j][i];
    }
  }
}

console.log(scores.join('\n'));