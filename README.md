# 코딩 테스트 문제 풀이
## ⚡️ 공부 순서
1. 백준 단계별로 풀어보기 1 - 12 단계
1. 강의 / 온라인 강의 - 알고리즘 기초 1/2
1. 알고리즘 기초 2/2
1. 알고리즘 중금 1/3

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



### 백준 입력값 정제하기
```javascript
/*공통 부분
1. fs 모듈을 가져온다.
2. 플랫폼이 linux면 '/dev/stdin'에서 입력값을 받아오고, 아니라면 현재 폴더의 './input.txt'에서 입력값을 받아와라.
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