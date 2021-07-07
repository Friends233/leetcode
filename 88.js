/*
 * @Description: 88.合并两个有序数组
 * @Author: Friends233
 * @Ideas: 先移除num1多余的0，然后将两个数组合并，排序
 */

const num1 = [1, 2, 3, 0, 0, 0]
const num2 = [2, 5, 6]
function pass(nums1, m, nums2, n) {
  nums1.splice(m)
  nums1.push(...nums2)
  return nums1.sort((a, b) => a - b)
}
console.log(pass(num1, 3, num2, 3))