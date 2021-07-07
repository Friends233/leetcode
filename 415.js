/*
 * @Description: 415.字符串相加
 * @Author: Friends233
 */
function pass(num1, num2) {
  let maxLen = Math.max(num1.length,num2.length)
  maxLen++
  num1 = num1.padStart(maxLen,0)
  num2 = num2.padStart(maxLen,0)
  console.log(num1,num2)
  let f = 0,sum=''
  for(let i=maxLen-1;i>=0;i--) {
    let h = parseInt(num1.charAt(i)) + parseInt(num2.charAt(i)) + f
    f= Math.floor(h/10) 
    let t= String(h%10)
    sum = t + sum
  }
  if(sum.charAt(0) === '0') {
    sum = sum.substring(1)
  }
  return sum
}
console.log(pass('123123123123', '123123123129'))