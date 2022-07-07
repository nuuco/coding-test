const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const str = fs.readFileSync(filePath).toString().trim();

let count = 0;
for(let i = 0; i < str.length; i++){
    count++;
    switch(str[i]) {
        case 'c':
            if(str[i+1] === '=' || str[i+1] === '-') i++;
            break;
        case 'd':
            if(str[i+1] === '-') i++;
            else if(str[i+1] === 'z' && str[i+2] === '=') i += 2; //여기에 else 안 써서 틀림
            break;
        case 'l':
            if(str[i+1] === 'j') i++;
            break;
        case 'n':
            if(str[i+1] === 'j') i++;
            break;
        case 's':
            if(str[i+1] === '=') i++;
            break;
        case 'z':
            if(str[i+1] === '=') i++;
            break;
    }


}

console.log(count);



//반례
//d-z=
//16번째 줄에 else 가 없는 경우 
//첫번째 if 문을 통과하면서 i++이 되기 때문에, 다음 i 가 가리키는 문자는 z가 된다.
//d는 이미 case 들어올 때 걸러졌고, i가 가리키는 z와 그다음 = 으로 인해