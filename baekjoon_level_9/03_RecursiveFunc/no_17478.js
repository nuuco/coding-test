const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

const firstMsg = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다."; 
const recur1 = `"재귀함수가 뭔가요?"`;
const recur2 = `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`;
const recur3 = `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`;
const recur4 = `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;
const answer = `"재귀함수는 자기 자신을 호출하는 함수라네"`;
const lastMsg = "라고 답변하였지.";
const underbar = "____";

//n = 인풋값, i는 최소 underbar 반복 수
const recur = (n, i) => {
    if(n === 0) {
        console.log(underbar.repeat(i) + answer);
        return;
    }
    console.log(underbar.repeat(i) + recur2);
    console.log(underbar.repeat(i) + recur3);
    console.log(underbar.repeat(i) + recur4);
    console.log(underbar.repeat(i + 1) + recur1);
    recur(n - 1, i + 1);
    console.log(underbar.repeat(i + 1) + lastMsg);
}

console.log(firstMsg);
console.log(recur1);
recur(n, 0);
console.log(lastMsg);


// n = 0 일 때,
// 어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.
// "재귀함수가 뭔가요?"
// "재귀함수는 자기 자신을 호출하는 함수라네"
// 라고 답변하였지.

// n = 1 일 때,
// 어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.
// "재귀함수가 뭔가요?"
// "잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
// 마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
// 그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."
// ____"재귀함수가 뭔가요?"
// ____"재귀함수는 자기 자신을 호출하는 함수라네"
// ____라고 답변하였지.
// 라고 답변하였지.

// n = 2 일 때,
// 어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.
// "재귀함수가 뭔가요?"
// "잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
// 마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
// 그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."
// ____"재귀함수가 뭔가요?"
// ____"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
// ____마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
// ____그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."
// ________"재귀함수가 뭔가요?"
// ________"재귀함수는 자기 자신을 호출하는 함수라네"
// ________라고 답변하였지.
// ____라고 답변하였지.
// 라고 답변하였지.

