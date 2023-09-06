const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, input] = fs.readFileSync(filePath).toString().trim().split("\n");

let nums = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let len = nums.length;
let sum = BigInt(0);


for (let i = 0; i < nums.length; i++) {
  sum += BigInt(nums[i] * (2 * i - 2 * (len - i - 1)));
}

console.log(sum.toString());

// 정렬 후 배열이 a_0, a_1, ..., a_n-1이 되었다고 합시다.
// 각 n^2개의 쌍 중, a_i는  (a_0 ~ a_n, a_i)와 (a_i, a_0~a_n)로 총 2*n번 등장합니다.
// 여기서 a_i의 상대를 a_j라고 하면, a_i > a_j일 때는 a_i - a_j로 계산할테니 a_i는 답에서 더해질테고, 반대면 빼질것입니다.
// a_i,a_i 두개를 제외하고 총 2*n-2개의 쌍에서 a_i보다 큰 원소와 작은 원소가 각각 몇개인지 세봅시다.
// a_i보다 큰 원소는 a_i+1 ~ a_n-1까지 총 (n-1)-(i+1)+1 = n-i-1개가 있습니다.
// a_i는 a_i보다 큰 원소들과 각각 2번씩 쌍을 이루므로, a_i는 답에서 총 2*(n-i-1)번 빼질겁니다.
// a_i보다 작은 원소는 i개가 있으므로, 마찬가지로 2*i번 등장합니다.
// 따라서, 답은 a_i * {2*i - 2*(n-i-1)}를 i=0~n-1까지 전부 더해주면 구할 수 있습니다.