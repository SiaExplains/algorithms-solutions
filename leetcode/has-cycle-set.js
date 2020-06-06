/*
Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to.
If pos is -1, then there is no cycle in the linked list.

    // Using Set Data Strcture to avoid dupplication
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) return false;
    const nodeSet = new Set();
    let node = head;
    while (node) {
        if (nodeSet.has(node)) {
            return true;
        }
        nodeSet.add(node);
        node = node.next;
    }
    return false;
};
