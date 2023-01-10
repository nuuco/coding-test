const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
// 참고 : https://gobae.tistory.com/52
// 이해는 아직 못함...ㅎㅎ...

const solution = (input) => {
  const [n, s] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  let count = 0;

  const pick = [];
  const dfs = (l) => {
    if (l === n) {
      const sum = pick.reduce((acc, cur) => acc + cur, 0);
      if (sum === s) count++;
      return;
    }
    pick.push(arr[l]);
    dfs(l + 1);
    pick.pop();
    dfs(l + 1);
  };
  dfs(0);

  if (s === 0) count--;
  return count;
};

console.log(solution(input));
