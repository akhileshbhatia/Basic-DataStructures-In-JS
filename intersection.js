import { LinkedList } from './LinkedList.js';

const firstList = new LinkedList();
const secondList = new LinkedList();

//create linked list 1
for (let i=1; i<=10; i++) {
  firstList.insertAtEnd(i);
}

//create linked list 2
for (let i=8; i<=20; i++) {
  secondList.insertAtEnd(i);
}

//create a set from linked list 1
const linkedListSet = new Set(firstList.getDataInLinkedList());

//initialize intersection linked list
const linkedListIntersection = new LinkedList();

//get second linkedlist array so that it can be iterated over
const secondListArray = secondList.getDataInLinkedList();

//iterate over the secondlist array
for(let i=0; i<secondListArray.length; i++) {
  if(linkedListSet.has(secondListArray[i])) { //check if the set has element of second list, if it does insert it in intersection
    linkedListIntersection.insertAtEnd(secondListArray[i]);
  }
}

console.log(JSON.stringify(linkedListIntersection, null, 2));