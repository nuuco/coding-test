const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const [t, strArr] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = strArr.split(" ").map(Number);

/**LSCS: 주어진 배열의 연속된 부분 배열*의 합을 구한다고 할 때, 이 중 가장 큰 값(Largest Sum of Contiguous Subarray) */
const LSCS = function (arr) {
  let sum = 0; //연속 배열의 합
  let max = Number.MIN_SAFE_INTEGER; //가장 안전한 최소값. 또는 arr[0] 줘도 될 듯.
  for (let el of arr) {
    sum = sum + el;
    if (max < sum) max = sum;
    //만약 연속 구간의 합이 음수면
    //그 부분은 버리고 다시 시작해도 된다.
    //sum 이 음수 -> 그 다음 요소가 양수 : sum 버리고 다음 요소부터 누적하는게 낫다.
    //sum 이 음수 -> 그 다음 요소가 음수 : 음수는 더해줘봤자 작아지니까 sum 버리고 다음 요소부터 누적하는게 낫다.
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

console.log(LSCS(arr));
