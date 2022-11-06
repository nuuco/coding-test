//오늘 날짜 구하기
//출력 에시 : 2015-01-24

//UTC 시간 계산
const curr = new Date();
const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);

//UTC to KST (UTC + 9시간)
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const today = new Date(utc + (KR_TIME_DIFF));

const year = today.getFullYear();  //년, 2022

const tmpMonth = today.getMonth() + 1;  //월, 1월(0) ~ 12월(11) → 0부터 시작 주의
const month = tmpMonth <= 9 ? '0' + tmpMonth : tmpMonth;

const tmpDay = today.getDate(); //일, 3 (1 ~ 31)
const day = tmpDay <= 9 ? '0' + tmpDay : tmpDay;

console.log(year + '-' + month + '-' + day);
