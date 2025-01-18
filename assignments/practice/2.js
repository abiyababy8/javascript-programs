// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums. Example 1: Input: nums = [1,2,3,4], Output: [1,3,6,10], Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
var arr = [1, 2, 3, 4]
var res = []
var sum = 0
for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
    res.push(sum)
}
console.log(res)