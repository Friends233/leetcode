/*
 * @Description: 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
const rot = {
  val:0,
  left:{
    val:1
  },
  right:{
    val:1
  }
}
var hasPathSum = function (root, targetSum) {
  let flag = false
  const dfs = function (r, s) {
    if(!r) {
      return 
    }
    s += Number(r.val)
    r.left && dfs(r.left, s)
    r.right && dfs(r.right, s)
    if (!r.left && !r.right && s === targetSum) {
      flag = true
    }
  }
  dfs(root, 0)
  return flag
};
console.log(hasPathSum(rot,1))