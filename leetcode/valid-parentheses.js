/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

    Read World Example:
    Code Editiors , IDE

*/

class Stack extends Array {
    constructor(...elms) {
        super(...elms);
    }

    push(data) {
        super.push(data);
    }
    pop() {
        if (this.length === 0) throw new Error('Stack is empty');
        super.pop();
    }
    peek() {
        if (this.length === 0) throw new Error('Stack is empty');
        return this[this.length - 1];
    }
    size() {
        return this.length;
    }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let letters = s.split('');
    let stack = new Stack();
    for (let i = 0; i < letters.length; i++) {
        let current = letters[i];
        if (current === '[' || current === '(' || current === '{') {
            stack.push(current);
        } else {
            if (stack.size() === 0) {
                return false;
            }
            let lastItem = stack.peek();
            stack.pop();
            if (lastItem === '[' && current === ']') {
            } else if (lastItem === '(' && current === ')') {
            } else if (lastItem === '{' && current === '}') {
            } else {
                return false;
            }
        }
    }
    if (stack.size() !== 0) {
        return false;
    }
    return true;
};

let test = '()[]{}';
console.log(isValid(test));
