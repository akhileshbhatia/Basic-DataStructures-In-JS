import { LinkedList } from './LinkedList.js';

const linkedList = new LinkedList();

console.log(linkedList.getSize());

linkedList.insertAtStart(10);
linkedList.insertAtEnd(20);
linkedList.insertAtEnd(30);

console.log(linkedList.getSize());
console.log(JSON.stringify(linkedList, null, 2));

linkedList.insertAtPosition(3, 25);
console.log(linkedList.getSize());
console.log(JSON.stringify(linkedList, null, 2));

