/*
 * @Description: 面试题 17.10. 主要元素
 * @Author: Friends233
 * @Ideas: 直接打表存数量，超过一半直接返回就行
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length,len_2 = nums.length/2,p = []
  for (let i = 0; i < len; i++) {
    if (p[nums[i]]) {
      p[nums[i]]++
    } else {
      p[nums[i]] = 1
    }
    if (p[nums[i]] > len_2) {
      return nums[i]
    }
  }
  return -1
};
console.log(majorityElement([1,2,5,9,5,9,5,5,5]))
