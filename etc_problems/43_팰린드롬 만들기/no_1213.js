const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

/**
 * 어떻게 풀까?
 * 1. 각 알파벳을 객체에 저장을 해서, 각 알파벳 수를 카운트 해준다.
 * 2. 일단 알파벳 개수가 저장된 객체를 홀수개 알파벳을 가진 객체와 짝수개 알파벳을 가진 객체로 나눈다.
 * 3. input 이 홀수 길이라면, 홀수 알파벳이 1개만 있어야하고
 *    input 이 짝수 길이라면, 홀수 알파벳이 0개여야 한다.
 * 4. 3조건을 만족한다면 5번으로 넘어가고 아니면 I'm Sorry Hansoo 를 출력
 * 5. 짝수 객체를 알파벳 순으로 돌며 n/2개 출력한다. (n/2한 값을 재할당해도 좋다.)
 * 6. 홀수 알파벳이 있다면 (어차피 1개)개수 전부를 출력한다.
 * 7. 짝수 객체를 역알파벳 순으로 돌며 n/2개 출력한다.
 */

const solution = () => {
  const result = "";

  const obj = {};
  for (let char of input) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  const oddObj = {};
  for (let char of Object.keys(obj)) {
    if (obj[char] % 2 === 1) {
      oddObj[char] = obj[char];
    }
  }

  if (
    (input.length % 2 === 1 && Object.keys(oddObj).length === 1) ||
    (input.length % 2 === 0 && Object.keys(oddObj).length === 0)
  ) {
    let result = "";
    for (let evenChar of Object.keys(obj).sort()) {
      const tmp = Math.floor(obj[evenChar] / 2);
      result += evenChar.repeat(tmp);
      obj[evenChar] -= tmp;
    }

    if (Object.keys(oddObj).length !== 0) {
      const oddChar = Object.keys(oddObj)[0];
      result += oddChar;
      obj[oddChar] -= 1;
    }

    for (let evenChar of Object.keys(obj).sort().reverse()) {
      result += evenChar.repeat(obj[evenChar]);
    }

    return result;
  } else {
    return "I'm Sorry Hansoo";
  }
};

console.log(solution(input));
