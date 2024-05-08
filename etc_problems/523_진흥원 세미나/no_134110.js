const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const obj = {
  Algorithm: "204",
  DataAnalysis: "207",
  ArtificialIntelligence: "302",
  CyberSecurity: "B101",
  Network: "303",
  Startup: "501",
  TestStrategy: "105",
};

const result = [];

for (let el of input) {
  result.push(obj[el]);
}

console.log(result.join("\n"));
