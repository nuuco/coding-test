//괜히 복잡하게 생각 말자
//생성자에서부터 d(n)이 될 수 있는 수를 역추론하는게 아니라,
//셀프 넘버가 아닌 수를 전부 생성해서, 1 ~ 10,000 중에 없는 것만 뽑아내면
//그게 바로 셀프 넘버가 된다.

const nonSelfNums = [];
for(let i = 1; i <= 10000; i++) {
    const str = String(i);
    let num = i;
    for(let char of str) {
        num += Number(char);
    }
    nonSelfNums.push(num);
}

for(let i = 1; i <= 10000; i++) {
    if(!nonSelfNums.includes(i)) console.log(i);
}
