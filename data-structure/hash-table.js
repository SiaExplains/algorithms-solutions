/*
    Hash Table
    For Store Key/Value Data

    Using Array as Hash Table
    Each Item of array is a bucket

    Runtime:
    Lookup: O(1) , Insertion: O(1)

    Using Chaining for prevent Collision
*/

class Node {
    constructor(key = null, value = null) {
        this.value = value;
        this.next = null;
        this.key = key;
    }
}

class HashTable {
    constructor(maxSize) {
        this.arr = new Array(maxSize).fill().map(() => new Node());
        this.size = maxSize;
    }

    lookup(key) {
        let node = this.arr[this.hash(key)];
        while (node) {
            if (node.key === key) {
                return node;
            }
            node = node.next;
        }
    }

    insert(key, item) {
        let head = this.arr[this.hash(key)];
        let node = new Node(key, item);

        if (!head.key) {
            this.arr[this.hash(key)] = node;
        } else {
            while (head) {
                if (head.next === null) {
                    head.next = node;
                    break;
                }
                head = head.next;
            }
        }
    }

    hash(key) {
        let index = 1;
        key.split('').forEach((element) => {
            index += element.charCodeAt(0);
        });
        return index % this.size;
    }

    print() {
        console.table(this.arr);
    }
}

const hashTable = new HashTable(5);

hashTable.insert('ali', { name: 'Seyed Ali', age: 60 });
hashTable.insert('sia', { name: 'siavash', age: 32 });
hashTable.insert('rza', { name: 'reza', age: 33 });
hashTable.insert('niu', { name: 'niusha', age: 27 });
hashTable.insert('kha', { name: 'khashayar', age: 25 });
hashTable.insert('sha', { name: 'sheida', age: 31 });
hashTable.insert('ana', { name: 'anna', age: 27 });
hashTable.insert('mmo', { name: 'Mohammad', age: 32 });
hashTable.insert('amr', { name: 'amir', age: 31 });
hashTable.insert('kam', { name: 'Kamran', age: 42 });
hashTable.insert('moh', { name: 'Mohsen', age: 42 });

console.log(hashTable.lookup('moh').value);
console.log(hashTable.lookup('kam').value);
hashTable.print();
