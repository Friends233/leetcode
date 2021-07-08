/*
 * @Description: 104. 二叉树的最大深度
 * @Author: Friends233
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0
  const dfs = function (r, s) {
    if (!r) {
      return
    }
    if (!r.left && !r.right) {
      max = Math.max(s, max)
    }
    r.left && dfs(r.left, s + 1)
    r.right && dfs(r.right, s + 1)
  }
  dfs(root, 1)
  return max
};