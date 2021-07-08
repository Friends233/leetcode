/*
 * @Description: 和相同的二元子数组
 * @Author: Friends233
 */
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let sum = 0, n = 0
  if (nums.length === 0 && goal === 0) {
    n++
  }
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum === goal) {
      // console.log(queue)
      n++
    }
    if (sum >= goal) {
      let s = sum
      for (let j = 0; j < i; j++) {
        s -= nums[j]
        if (s === goal) {
          n++
        }
      }
    }
  }
  return n
};
console.log(numSubarraysWithSum([0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 0))