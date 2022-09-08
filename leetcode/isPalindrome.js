/*
    Given an integer x, return true if x is palindrome integer.

    An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.
    
    for more inf: https://leetcode.com/problems/palindrome-number/
*/
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const chars = x.toString().split('');
    const len = chars.length;
    for(let i=0;i<chars.length;i++) {
        if(chars[i] !== chars[len - i-1]){
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(1));