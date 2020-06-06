/*

Write a program to find the node at which the intersection of two singly linked lists begins.

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let a = headA;
    let b = headB;
    while (a != b) {
        // If one reaches end first then move a|b to the head of b|a
        // This handles case if both have different lengths. No need to
        // count length of A and B. If there is no overlap both A and B ends with null.
        a = a != null ? a.next : headB;
        b = b != null ? b.next : headA;
    }

    return a;
};

// var getIntersectionNode = function (headA, headB) {
//     while (headA || headB) {
//         if (headA.val === headB.val) return headA.val;
//         if (headA.next) headA = headA.next;
//         if (headB.next) headB = headB.next;
//     }
//     return null;
// };
