/*
 * @Description: 无重复字符的最长子串
 * @Author: Friends233
 */

function pass(s){
  let maxNum = 0,temp = []
  for(let i=0;i<s.length;) {

    if(temp.indexOf(s.charAt(i)) === -1){
      temp.push(s.charAt(i))
    }else {
      temp.shift()
      continue
    }
    if(temp.length > maxNum) {
      maxNum = temp.length
    }
    i++
  }
  return maxNum
}