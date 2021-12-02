/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxp = 0
  let minnum = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if(prices[i] > minnum) {
      maxp = Math.max(prices[i] - minnum,maxp)
    }else {
      minnum = prices[i]
    }
  }
  return maxp
};
// @lc code=end

