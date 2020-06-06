/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let firstIndex = 0;
    let secondIndex = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                firstIndex = i;
                secondIndex = j;
                break;
            }
        }
    }
    return [firstIndex, secondIndex];
};
