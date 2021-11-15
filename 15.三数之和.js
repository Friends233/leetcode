/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;
  const res = [];
  const map = {};
  if (n < 3) {
    return [];
  }
  for (let i = 0; i < n; i++) {
    let s = nums[i];
    for (let j = i + 1; j < n; j++) {
      let p = 0 - (nums[j] + s);
      if (nums.indexOf(p, j + 1) !== -1) {
        const str = [s, nums[j], p].sort().join("=");
        if (!map[str]) {
          res.push([s, nums[j], p]);
          map[str] = true;
        }
      }
    }
  }
  return res;
};
// @lc code=end
