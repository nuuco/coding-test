const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

//node.js 로는 통과 불가
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

let set = new Set();

const aux = (command, strNum) => {
  const num = Number(strNum);

  switch(command) {
    case "add": 
      set.add(num);
      break;  
    case "remove": 
      set.delete(num);
      break;  
    case "check":
      if(set.has(num)) return 1;
      else return 0;
    case "toggle": 
      if(set.has(num)) set.delete(num);
      else set.add(num);;
      break;  
    case "all": 
      s = new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
      break;  
    case "empty": 
      s = new Set();
      break;   
  }
}

const result = [];
for(let el of arr) {
  const [command, strNum] = el.split(' ');

  const answer = aux(command, strNum);
  if(answer !== undefined) {
    result.push(answer);
  }
}

console.log(result.join('\n'));
