const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const FixedCost = Number(input[0]);  //고정비용
const VarCost = Number(input[1]);  //가변비용
const Price = Number(input[2]);  //상품 1개 가격

//손익 분기점 : 고정비용 + (가변비용 * 판매량) < 가격 * 판매량
// 고정비용 < (가격 - 가변비용) * 판매량
// 손익 분기점을 넘을 때 판매량 = 고정비용 / (가격 - 가변비용)
// -> 만약 판매량이 소수점이라면 소수점을 자르고 +1 해줘햐 한다.

if(VarCost >= Price) console.log(-1);
else {
    const break_end_sales = Math.floor(FixedCost / (Price - VarCost)) + 1;
    console.log(break_end_sales);
}




