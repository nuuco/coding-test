const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const set = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0};

for(let char of input) {
    switch(char) {
        case "0" :
            set[0]++; 
            break;
        case "1" :
            set[1]++; 
            break;
        case "2" :
            set[2]++; 
            break;
        case "3" :
            set[3]++; 
            break;
        case "4" :
            set[4]++; 
            break;
        case "5" :
            set[5]++; 
            break;
        case "7" :
            set[7]++; 
            break;
        case "8" :
            set[8]++; 
            break;
        case "6" :
            if(set[6] <= set[9]) set[6]++;
            else set[9]++;
            break;
        case "9" :
            if(set[6] <= set[9]) set[6]++;
            else set[9]++;
            break;
    }
}

console.log(Math.max(...Object.values(set)));


