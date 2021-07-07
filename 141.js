/*
 * @Description: 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针，递归
var hasCycle = function (head) {
  let fast = head, slow = head.next || null
  while(fast){
    if(fast === slow){
      return true
    }
    fast = fast.next || null
    slow = slow.next || null
  }
  return false
};

// 数组
var p = function(head) {
  const ary = []
  while(head){
    if(ary.includes(head)){
      return true
    }
    ary.push(head)
    head = head.next
  }
  return false
}