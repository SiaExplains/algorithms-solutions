/*
Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to.
If pos is -1, then there is no cycle in the linked list.

    // Using flag boolean variable!
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
    let flags = [];
    let node = head;
    while (node) {
        if (node.hasVisited) {
            return true;
        }
        node.hasVisited = true;
        node = node.next;
    }
    return false;
};
