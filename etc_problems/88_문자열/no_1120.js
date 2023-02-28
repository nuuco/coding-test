const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ");

//짧은 문자열을 최대한 긴 문자열과 일치시켰을 때, 다른 문자의 수를 출력하면 된다.
//a, b 길이는 최대 50 이다.
//for 문 i = 0 ~ (min max 차이)
//min 을 max 의 0 인덱스에서 부터 비교, i 를 1씩 증가시켜 (min max 차이)까지 순회, 그 값중 최소 차이값을 저장
//최소 차이값 출력

const solution = (a, b) => {
  let min = "";
  let max = "";
  if (a.length < b.length) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }

  let minDiffCount = 100; //50보다 큰 수로 임시 지정
  const diffLen = max.length - min.length;

  /**
   * 두 문자열의 같은 인덱스끼리 비교해서 다른 단어 수를 리턴하는 함수
   * @param {string} min 짧은 문자열
   * @param {string} max 긴 문자열
   * @param {*} maxStartIdx 긴 문자열의 비교 시작 인덱스
   * @returns {number} 두 문자열에서 다른 문자의 개수
   */
  const getDiffCount = (min, max, maxStartIdx) => {
    let count = 0;
    for (let i = 0; i < min.length; i++) {
      if (min[i] !== max[maxStartIdx + i]) {
        count++;
      }
    }

    return count;
  };

  for (let i = 0; i <= diffLen; i++) {
    const tmpDiffCount = getDiffCount(min, max, i);
    if (minDiffCount > tmpDiffCount) {
      minDiffCount = tmpDiffCount;
    }
  }

  return minDiffCount;
};

console.log(solution(a, b));
