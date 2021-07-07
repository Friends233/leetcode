/*
 * @Description: 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  let sum = 0
  const dfs = function (r, str) {
    if(!r){
      return
    }
    str += r.val
    if (!r.left && !r.right) {
      sum += Number(str)
    }
    dfs(r.left, str)
    dfs(r.right, str)
  }
  dfs(root, '')
  return sum
};