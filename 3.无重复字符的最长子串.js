/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s)
 {
   const temp = []
   let max = 0
   for(let i=0;i<s.length;){
     const c= s.charAt(i)
     if(temp.indexOf(c) === -1){
       temp.push(c)
     }else  { 
       temp.shift()
       continue
     }
     i++
     max = temp.length > max?temp.length:max
   }
   return max
 };
// @lc code=end

