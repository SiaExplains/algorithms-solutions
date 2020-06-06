var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.some((n, idx) => n == nums[i] && idx != i)) {
            continue;
        }
        return nums[i];
    }
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); //4
