/**
 * initialize your data structure here.
 */

var MinStack = function () {
    this.min = null;
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    if (this.min > x || this.min === null) {
        this.min = x;
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return Math.min(this.stack);
};

var obj = new MinStack();
obj.push(10);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
