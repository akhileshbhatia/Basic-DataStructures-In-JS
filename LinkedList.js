import { SingleNode } from './SingleNode.js';

export class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtStart(data) {
        const singleNode = new SingleNode(data);
        singleNode.next = this.head;
        this.head = singleNode;
    }

    insertAtEnd(data) {
        if (this.getSize() === 0) {
            return this.insertAtStart(data);
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        const singleNode = new SingleNode(data);
        current.next = singleNode;
    }

    insertAtPosition(pos, data) {
        if (pos < 1) {
            console.log('Minimum value of position is atleast 1');
            return;
        }
        let size = this.getSize();
        if (size === 0 || pos === 1) {
            return this.insertAtStart(data);
        } else if (size === (pos - 1)) {
            return this.insertAtEnd(data);
        }
        let current = this.head;
        let currentPos = 1; //point to the first record
        while (currentPos !== (pos - 1)) {
            current = current.next;
            currentPos++;
        }
        const singleNode = new SingleNode(data);
        singleNode.next = current.next;
        current.next = singleNode;
    }

    getSize() {
        if (this.head === null) return 0;
        let size = 1; //linked list has atleast 1 node
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
            size++;
        }
        return size;
    }

    getDataInLinkedList() {
      const resultArray = [];
      let current = this.head;
      while(current.next != null) {
        resultArray.push(current.data);
        current = current.next;
      }
      resultArray.push(current.data); //insert last element as well
      return resultArray;
    }
}