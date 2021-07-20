/*
 * @Description: 160. 相交链表
 * @Author: Friends233
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const ary = []
  let curr = headA
  while(curr){
    ary.push(curr)
    curr = curr.next
  }
  curr = headB
  while(curr){
    if(ary.includes(curr)) {
      return curr
    }
    curr = curr.next
  }
  return null
};