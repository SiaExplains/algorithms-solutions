/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    function preOrder(t1, t2) {
        if (t1 === null || t2 === null) {
            return;
        }
        t1.val += t2.val;
        if (t1.left !== null && t2.left !== null) {
            preOrder(t1.left, t2.left);
        } else if (t1.left === null) {
            t1.left = t2.left;
        }

        if (t1.right !== null && t2.right !== null) {
            preOrder(t1.right, t2.right);
        } else if (t1.right === null) {
            t1.right = t2.right;
        }
    }
    if (t1 === null) return t2;
    preOrder(t1, t2);
    return t1;
};
