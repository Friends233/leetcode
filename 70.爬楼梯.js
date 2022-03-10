/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if(n<=2) return n
  n-=2
  let a=1,b=1,c=2
  while(n--){
    a = b
    b = c
    c = a+b
  }
  return c
};
// @lc code=end

