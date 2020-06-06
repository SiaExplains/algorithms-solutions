/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let arrayS = S.split('');
    let arrayT = T.split('');
    let applyBackSpaceOnS = [];
    let applyBackSpaceOnT = [];

    let itemS = [];

    let itemT = [];

    while (arrayS.length > 0) {
        itemS = arrayS.shift();
        if (itemS === '#') {
            applyBackSpaceOnS.pop();
        } else {
            applyBackSpaceOnS.push(itemS);
        }
    }
    while (arrayT.length > 0) {
        itemT = arrayT.shift();
        if (itemT === '#') {
            applyBackSpaceOnT.pop();
        } else {
            applyBackSpaceOnT.push(itemT);
        }
    }
    return applyBackSpaceOnS.join('') === applyBackSpaceOnT.join('');
};

console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('xab##', 'c#d#x'));
console.log(backspaceCompare('xywrrmp', 'xywrrmu#p'));
console.log(backspaceCompare('bxj##tw', 'bxj###tw'));
