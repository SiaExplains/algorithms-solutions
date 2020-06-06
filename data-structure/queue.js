/*
    First In First Out

           +----------------------+
    null < |   |   |    |    |    |
           +----------------------+
    front                      back


    - Enqueue
    - Dequeue
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return !this.front;
    }

    enqueue(value) {
        let node = new Node(value);

        if (this.isEmpty()) {
            this.front = this.back = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
    }

    dequeue() {
        let node = this.front;
        if (this.isEmpty()) {
            this.front = this.front.next;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let tempArr = [];
            let tmp = this.front;
            while (tmp) {
                tempArr.push(tmp.value);
                tmp = tmp.next;
            }
            console.log(tempArr.join(','));
        }
    }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(5);
q.enqueue(15);
q.enqueue(67);
q.print();
