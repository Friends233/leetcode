/*
 * @Description: 爬楼梯
 * @Author: Friends233
 */
// 递归
const climbStairs = function(n) {
  if(n<=2){
    return n
  }
  return climbStairs(n-1) + climbStairs(n-2)
}
console.log(climbStairs(45))

// 循环
const p = function(n) {
  if(n<=2){
    return n
  }
  let next=1,pre=2,temp
  for(let i = 3;i<=n;i++) {
    temp = next +pre
    next = pre
    pre = temp
  }
  return temp
}
console.log(p(45))