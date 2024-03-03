# // const fs = require("fs");
# // const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

# // const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

# // const result = [];

# // result.push(Math.floor(n / m));
# // result.push(Math.floor(n % m));

# // console.log(result.join("\n"));



# //파이썬으로

from sys import stdin

n,m = map(int, stdin.readline().split())


k = n//m
a = n%m

print(k)
print(a)