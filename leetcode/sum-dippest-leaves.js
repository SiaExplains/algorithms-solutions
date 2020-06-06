/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let sum = 0,
        q = [],
        runOnSum = 0;
    q.push(root);
    q.push(null);
    console.log(q);
    while (q.length > 0) {
        let t = q.shift();

        if (t) {
            if (t.left) q.push(t.left);
            if (t.right) q.push(t.right);
            console.log('step');
            runOnSum += t.val;

            if (q.length > 0 && !q[0]) {
                sum = runOnSum;
                runOnSum = 0;
                q.push(null);
            }
        }
    }
    return sum;
};

function traceTree(node, level, intg) {
    if (node.left != null) {
        intg[level] += traceTree(node.left, level + 1);
    }

    if (node.left != null) {
        intg[level] += traceTree(node.left, level + 1);
    }

    if (node.left === null && node.right === null) {
        return node.val;
    }
    return intg;
}

x = [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8];

deepestLeavesSum(x);
