const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';

//https://velog.io/@arthur/11286.-%EC%A0%88%EB%8C%93%EA%B0%92-%ED%9E%99-node.js-javascript 코드 참고
const [t, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  size() {
    return this.values.length;
  }

  print() {
    return this.values;
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      //절댓값[0] 먼저 비교 후 실제 값 비교
      if (
        element[0] > parent[0] ||
        (element[0] === parent[0] && element[1] > parent[1])
      ) break;
      
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMin() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min[1];
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (
          leftChild[0] < element[0] ||
          (leftChild[0] === element[0] && leftChild[1] < element[1])
        ) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (swap === null) {
          if (
            rightChild[0] < element[0] ||
            (rightChild[0] === element[0] && rightChild[1] < element[1])
          ) {
            swap = rightChildIdx;
          }
        } else {
          if (
            rightChild[0] < leftChild[0] ||
            (rightChild[0] === leftChild[0] && rightChild[1] < leftChild[1])
          ) {
            swap = rightChildIdx;
          }
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const answer = [];

const heap = new MinBinaryHeap();

for (let num of arr) {
  if (num === 0 && heap.size() === 0) answer.push(0);
  else if (num === 0 && heap.size() !== 0) answer.push(heap.extractMin());
  else heap.insert([Number(Math.abs(num)), num]); //절댓값과 실제 숫자를 배열로 만들어 넣어준다!!!
}

console.log(answer.join("\n"));