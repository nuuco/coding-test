const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...arr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const solution = (arr) => {
  let max = 0;
  let count = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      count++;
      max = arr[i];
    }
  }
  return count;
}

console.log(solution(arr));
console.log(solution(arr.reverse()));

