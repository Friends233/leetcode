/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let maxn = 0
  if(num1.length > num2.length) {
    maxn = num1.length
    num2 = num2.padStart(maxn,'0')
  }else {
    maxn = num2.length
    num1 = num1.padStart(maxn,'0')
  }
  let f = 0 // 进位
  let sum = "" // 和
  for(let i=maxn-1;i>=0;i--){
    let temp = parseInt(num1[i])+parseInt(num2[i])+f
    f = parseInt(temp/10)
    temp = temp%10
    sum = temp + sum
  }
  if(f!==0) {
    sum = '1'+sum
  }
  return sum
};
// @lc code=end

