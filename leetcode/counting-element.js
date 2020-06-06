/*
Given an integer array arr, count element x such that x + 1 is also in arr.

If there're duplicates in arr, count them seperately.

    Input: arr = [1,2,3]
    Output: 2
    Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

    Input: arr = [1,1,3,3,5,5,7,7]
    Output: 0
    Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + 1)) {
            count++;
        }
    }
    return count;
};

console.log(countElements([1, 1, 2, 2]));
