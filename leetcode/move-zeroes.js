/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Example:
    Input: [0,1,0,3,12]
    Output: [1,3,12,0,0]

    1.You must do this in-place without making a copy of the array.
    2.Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    nums.push(null);
    let counter = 0;
    while (true) {
        let current = nums.shift();
        if (current === null) {
            nums.push(...new Array(counter).fill(0));
            break;
        }
        if (current === 0) {
            counter++;
        } else {
            nums.push(current);
        }
    }
};
moveZeroes([0, 1, 0, 3, 12]);
