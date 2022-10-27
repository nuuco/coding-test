const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [str, n, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

//연결 리스트로 풀기

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    let node = new Node(data);
    let current;

    if(this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insertAt(data, index) {
    if(index > 0 && index > this.size) {
      return;
    }

    if(index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head; //current는 현재 첫번째 노드임
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      //loop를 통해 해당 index의 연결고리를 끊는다.
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  printListData() {
    let current = this.head; // 현재 노드를 나타냄

    let answer = "";
    while (current) {
      answer += current.data;
      current = current.next;
    }

    console.log(answer);
  }
}

const strArr = str.split('');
let cursor = str.length;

const linkedList = new LinkedList();
for(let char of strArr) {
  linkedList.insertLast(char);
}

const oper = (command) => {
  if(command === 'L') {
    if(cursor > 0) cursor--;  //0 은 무시
  } else if(command === 'D') {
    if(cursor < linkedList.size) cursor++; //length 은 무시
  } else if(command === 'B') {
    if(cursor > 0) {
      linkedList.removeAt(cursor - 1);
      cursor--; //삭제로 인한 이동
    }
  } else {
    const [p, char] = command.split(' ');
    linkedList.insertAt(char, cursor);
    cursor++; //추가로 인한 이동
  }
}

for(let command of arr) {
  oper(command);
}

linkedList.printListData();
