/*
 * @Description: 二叉树的层序遍历
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
 * @return {number[][]}
 */
const rot = {
  val: 3,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7
    }
  }
}
var levelOrder = function (root) {
  const ary = []
  const bfs = function (r, i) {
    if (!r) {
      return
    }
    if(!ary[i]) {
      ary.push([])
    }
    ary[i].push(r.val)
    r.left && bfs(r.left, i + 1)
    r.right && bfs(r.right, i + 1)
  }
  bfs(root, 0)
  return ary
};
console.log(levelOrder(rot))