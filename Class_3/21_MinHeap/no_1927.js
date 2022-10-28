const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

//js 로 최소 힙 구현
/*
0 번 인덱스는 더미 데이터
왼쪽 자식의 index = 부모 index * 2
오른쪽 자식의 index = (부모 index * 2) + 1
부모의 index = Math.floor(자식의 인덱스 / 2);
*/
//참고 자료: https://velog.io/@longroadhome/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-JS%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-HEAP

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  insert(value) {
    //마지막에서 넣어서 부모와 교환하며 위로 올린다.
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);
    
    while(curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx =  Math.floor(curIdx / 2);
    }
  }

  popMin() {
    const min = this.heap[1];
    if(min === undefined) return 0;  //배열이 빈경우 0 을 반환

    if(this.heap.length <= 2) this.heap = [ null ];
    else this.heap[1] = this.heap.pop();
    //루트 요소를 맨 마지막 요소로 넣어준다.

    //위치 조정
    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if(!this.heap[leftIdx]) return min;
    //왼쪽 자식이 없다 = 오른쪽 자식도 없는 루트 상태, 바로 반환
    if(!this.heap[rightIdx]) {
      // 오른쪽 자식이 없다면 왼쪽 자식하나만 있다는 것을 의미한다.
      if(this.heap[leftIdx] < this.heap[curIdx]) {
        [ this.heap[leftIdx], this.heap[curIdx] ] = [ this.heap[curIdx], this.heap[leftIdx] ];
      }
      return min;
    }

    //양쪽 자식이 다 있을 경우...
    while(this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
      const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      //두 자식 중 작은 것과 교환
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
      //계속 교환하면서 교환이 끝날 때까지 아래로 내려감
    }
    return min;
  }
}

const result = [];
const heap = new MinHeap();

for(let el of arr) {
  if(el === 0) {
    result.push(heap.popMin());
  } else {
    heap.insert(el);
  }
}

console.log(result.join('\n'));