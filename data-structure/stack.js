class Stack extends Array {
    constructor(...elms) {
        super(...elms);
    }

    push(data) {
        super.push(data);
    }
    pop() {
        if (this.length === 0) throw new Error('Nothing to pop()');
        super.pop();
    }
    peek() {
        if (this.length === 0) throw new Error('Nothing to pop()');
        return this[this.length - 1];
    }
    size() {
        return this.length;
    }
}

const s = new Stack(1, 2, 3, 4);
s.push(5);
s.push(6);
console.log(s);
console.log('pop: ' + s.pop());

const code1 = '[({(([]))})]';
const code2 = '[(((([]))})]';

function checkCode(code) {
    const arr = code.split('');
    const stack = new Stack();
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (current === '[' || current === '(' || current === '{') {
            stack.push(current);
        } else {
            if (stack.size() === 0) {
                return false;
            }
            const lastElm = stack.peek();
            stack.pop();
            if (lastElm === '[' && current === ']') {
            } else if (lastElm === '(' && current === ')') {
            } else if (lastElm === '{' && current === '}') {
            } else {
                return false;
            }
        }
    }
    if (stack.size() !== 0) {
        return false;
    }
    return true;
}

const x = [];

console.log('CODE CHECKING....');
console.log(checkCode(code1));
console.log(checkCode(code2));
