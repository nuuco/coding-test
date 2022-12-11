//2020 KAKAO BLIND RECRUITMENT > 문자열 압축

function solution(s) {
  let result = s.length;

  if(s.length === 1) return 1;
  //i는 자르는 문자 개수 (최대 자르는 개수는 길이의 반)
  for(let i = 1; i <= Math.floor(s.length / 2); i++) {
      let comp = '';
      let tmp = s.slice(0, i);
      let cnt = 1;
      let idx = 0;

      for(idx = i; idx <= s.length; idx += i) {
          const next = s.slice(idx, idx + i);
          //반복 개수 카운트
          if(tmp === next) cnt++;
          else {
              if(cnt === 1) comp += tmp;
              else comp += cnt + tmp;
              //결과 추가하고 카운트 리셋
              cnt = 1;
              tmp = next;
          }
      }
      //마지막 tmp 추가하기
      if(cnt === 1) comp += tmp;
      else comp += cnt + tmp;
      //결과(comp)값이 최솟값이면 result 갱신
      result = result <= comp.length ? result : comp.length;
  }
  return result;
}
