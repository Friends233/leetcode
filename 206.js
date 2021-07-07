/*
 * @Description: 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
const n5 = {
  val: 2,
  next: null
}
const n4 = {
  val: 4,
  next: n5
}
const n3 = {
  val: 3,
  next: n4
}
const n2 = {
  val: 2,
  next: n3
}
const n1 = {
  val: 1,
  next: n2
}

var reverseList = function (head) {
  let pre = null
  let curr = head
  while(curr){
    const nextN = curr.next
    curr.next = pre
    pre = curr
    curr = nextN
  }
  return pre
};

