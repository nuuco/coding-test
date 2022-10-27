# 코딩 테스트 문제 풀이
## ⚡️ 공부 순서
1. 백준 단계별로 풀어보기 1 - 12 단계(최소)
1. solved.ac Class1 - 3
1. 알고리즘 기초 1/2, 2/2

<br/>

## 💎 백준 코딩 테스트
1. 입출력과 사칙연산
1. 조건문
1. 반복문
1. 1차원 배열
1. 함수
1. 문자열
1. 기본 수학 1
1. 기본 수학 2
1. 재귀
1. 브루트 포스
1. 정렬
1. 집합과 맵



### 🔧 백준 입력값 정제하기
**-> 시간 초과가 난다면 결과값에 개행문자를 넣어 한 번에 출력하기**
```javascript
/*공통 부분
1. fs 모듈을 가져온다.
2. 플랫폼이 linux면 '/dev/stdin'에서 입력값을 받아오고, 아니라면 현재 폴더의 './input.txt'에서 입력값을 받아온다. 
    (/dev/stdin 는 백준 제출 후 채점 시 입력값 받아오는 경로)
3. __dirname === 현재 실행 중인 폴더의 절대 경로 
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';


// 1. 하나의 값을 입력받을 때
const input = fs.readFileSync(filePath).toString().trim();


// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = fs.readFileSync(filePath).toString().trim().split(' ');


// 3. 여러 줄의 값들을 입력받을 때
const input = fs.readFileSync(filePath).toString().trim().split('\n');


// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split(/\s+/);


// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

​
// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const input = fs.readFileSync(filePath).toString().trim().split(/\s+/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);


```

 **+) readline 으로 입력받기 (시간 초과 & 런타임 에러 발생 시)**   
  -> 실행해 보려면, 터미널에서 node [파일경로] 로 실행 후, 한 줄씩 입력
```javascript
// readline 은 fs 과 달리 한 줄씩 입력받아 바로 코드를 실행시킬 수 있다.

/* 공통 부분
1. readline 모듈을 가져온다.
2. readline 인터페이스 객체를 만든다.(rl)
3. 'readline' 모듈의 'rl' 객체는 event-driven 방식으로 동작한다.
    "line" : 한 줄이 입력되는 이벤트. 입력 스트림이 줄 끝 입력 (\ n, \ r 또는 \ r \ n)을 수신 할 때마다 발생.
    "close" : close() 함수를 호출 했을 때 발생하는 이벤트. 프로세스가 종료된다. 즉 입력 받기를 종료한다.
4. line 이벤트 발생 시 실행할 코드는
    rl.on("line", function(str){ ...이 안에 넣는다... })
    -> 함수의 매개변수 str 은 읽어온 한 줄의 문자열이다!
    -> 만약 한 줄만 읽고 끝내도 된다면 이벤트 핸들러 함수 안에서 rl.close() 호출
5. close 이벤트 끝났을 시 실행할 코드는
    rl.on("close", function(){ ...이 안에 넣는다... })
    -> 코드 완전 종료 시 이벤트 핸들러 함수 안에서 process.exit() 호출 (필수는 아님)
6. rl.on("line", function(){...} ).on("close", function(){...}) 
    이렇게 이어서 사용해도 된다.
*/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// 1. 한줄 입력받을 때
rl.on('line', function(line) {
  solution(line); //solution을 호출 한 후

  rl.close();
}).on("close", function() {
  process.exit(); //프로세스 종료
});


// 2. 여러 줄 입력받을 때 (테스트케이스 갯수가 없는 경우)
let data = [];
rl.on('line', function (line) {
  data.push(line);
  // data = line.split('').map((el) => el);
  // data = line.split(' ').map((el) => el);
  // data = line.split('').map((el) => +el);

  rl.close();
}).on('close', function () {
  solution(data); //solution을 호출 한 후
  process.exit(); //프로세스 종료
});


// 3. 여러 줄 입력받을 때 (테스트케이스 갯수가 있는 경우)
let T = null;
let count = 0;
const data = [];

rl.on('line', function (line) {
  if (!T) {
    // T이 null이면
    T = +line;
  } else {
    data.push(line);
    count += 1; // data를 입력받으면 count를 증가시켜주고
  }
  if (count === T) {
    // count가 T일때 rl.close()를 호출해준다.
    rl.close();
  }
}).on('close', function () {
  // rl.close()를 호출하면 이 콜백함수로 들어오고
  solution(data); // solution을 호출 한 후
  process.exit(); // 프로세스를 종료한다.
});

//-> 이 경우, 데이터를 모아 받아 한 번에 처리하는 것
//-> line 을 받자마자 처리해도 된다.


```