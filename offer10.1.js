/*
 * @Description: 剑指 Offer 10- I. 斐波那契数列
 * @Author: Friends233
 */
/**
 * @param {number} n
 * @return {number}
 */
// 递归（超时）
var fib = function (n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
};
// 循环
const fb = function(n) {
  if(n<=1){
    return n
  }
  let a=1n,b=1n
  for(let i=2;i<=n;i++){
    // console.log(a)
    a = a+b
    b = a-b
  }
  return b % 1000000007n
}
const p = 45
// fb(p)
// console.log(fib(p))
console.log(fb(p))