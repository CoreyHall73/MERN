function twoSum(nums, targetSum) {
    let value = 0;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        value = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == targetSum) {
            result.push(i, j);
        }
        }
    }
    return result;
}
// your code here

console.log(twoSum(nums1, targetSum1));
console.log(twoSum(nums2, targetSum2));
console.log(twoSum(nums3, targetSum3));
