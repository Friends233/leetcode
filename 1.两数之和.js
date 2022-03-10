/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i=0;i<nums.length;i++){
    const j=nums.indexOf(target-nums[i],i+1)
    if(j !== -1){
      return [i,j]
    }
  }
  return []
};
// @lc code=end

