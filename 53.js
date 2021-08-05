/*
 * @Description: 53. 最大子序和
 * @Author: Friends233
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let sum=0,maxSum=-Infinity
  for(let i=0;i<nums.length;i++){
      sum+=nums[i]
      if(sum > maxSum) {
          maxSum = sum
      }
      if(sum<=0){
          sum=0
      }
  }
  return maxSum
};