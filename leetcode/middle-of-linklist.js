/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let node = head;
    let arr = [];

    while (node) {
        arr.push(node.val);
        node = node.next;
    }
    return arr.length % 2 === 0
        ? arr.slice(arr.length / 2, arr.length)
        : arr.slice(arr.length / 2 + 1, arr.length);
};

console.log(middleNode([1, 2, 3, 4, 5]));
