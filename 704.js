/*
 * @Description: 704. 二分查找
 * @Author: Friends233
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1, mid = Math.floor((l + r) / 2)
  while (l <= r) {
    if(l === r) {
      return nums[l] === target?l:-1
    }
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      r = mid
    } else {
      l = mid + 1
    }
    mid = Math.floor((l + r) / 2)
  }
  return -1
};
console.log(search([-1,0,3,5,9,12],9))