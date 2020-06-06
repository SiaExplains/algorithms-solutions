/*
    Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

    Input: [0,1]
    Output: 2
    Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let arr = new Array(2 * nums.length + 1);
    arr.fill(arr, -2);
    arr[nums.length] = -1;
    let maxlen = 0,
        count = 0;
    for (let i = 0; i < nums.length; i++) {
        count = count + (nums[i] == 0 ? -1 : 1);
        if (arr[count + nums.length] >= -1) {
            maxlen = Math.max(maxlen, i - arr[count + nums.length]);
        } else {
            arr[count + nums.length] = i;
        }
    }
    return maxlen;
};

console.log(findMaxLength([0, 1]));
console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([1, 1, 0, 0, 0]));
