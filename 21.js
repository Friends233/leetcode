/*
 * @Description: 21. 合并两个有序链表
 * @Author: Friends233
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(), r = head
  while(l1 && l2){
    if(l1.val <= l2.val) {
      r.next = l1
      l1 = l1.next
    }else {
      r.next=l2
      l2 = l2.next
    }
    r = r.next
  }
  if(l1){
    r.next = l1
  }
  if(l2){
    r.next = l2
  }
  return head.next
};