/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }

    let curSum = 0;
    let minPreSum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        maxSum = Math.max(maxSum, curSum - minPreSum);

        minPreSum = Math.min(minPreSum, curSum);
    }

    return maxSum;
};

let input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let input2 = [0];
let input3 = [1];
let input4 = [-2, 1];
console.log(maxSubArray(input1));
console.log(maxSubArray(input2));
console.log(maxSubArray(input3));
console.log(maxSubArray(input4));
