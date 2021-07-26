/*
 * @Description: 209. 长度最小的子数组
 * @Author: Friends233
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minAry = [], s = 0, ary = []
  for (let i = 0; i < nums.length; i++) {
    ary.push(nums[i])
    s += nums[i]
    while (s >= target && s - ary[0] >= target) {
      s -= ary.shift()
    }
    if (s >= target && minAry.length === 0 || ary.length < minAry.length) {
      minAry = [...ary]
    }
  }
  return minAry.length
};
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]))