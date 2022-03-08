/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const v1 = version1.split('.')
  const v2 = version2.split('.')
  let i=0,j=0
  while(true){
    const num1 = parseInt(v1[i] || '0'),
    num2 = parseInt(v2[j] || '0')
    if(num1 > num2){
      return 1
    }else if(num1 < num2){
      return -1
    }else {
      i++,j++
      if(i>=v1.length && j>=v2.length) {
        return 0
      }
    }
  }
};
// @lc code=end

