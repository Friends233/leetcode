/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxStr = s.charAt(0)
  let maxLength = maxStr.length
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; (j >= 0) && (j > i); j--) {
      // 当前字符串如果没有已知回文串长就不用循环了
      if ((j - i) > maxLength) {
        const str = s.substring(i, j)
        let t = 0, b = str.length - 1
        // 循环判断是否为回文串
        while ((t < b) && (t !== b) && (str.charAt(t) === str.charAt(b))) {
          t++
          b--
        }
        if ((b === t) || (t > b)) {
          maxStr = str
          maxLength = str.length
        }
      } else {
        break
      }
    }
  }
  return maxStr
};
// @lc code=end

