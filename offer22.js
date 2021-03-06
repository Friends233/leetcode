/*
 * @Description: 剑指 Offer 22. 链表中倒数第k个节点
 * @Author: Friends233
 * @Ideas: 用个数组存储每个节点，然后返回对应的节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  const ary = [null,]
  let curr = head
  while(curr) {
    ary.push(curr)
    curr = curr.next
  }
  return ary.splice(-k,1)[0]
};