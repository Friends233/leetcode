/*
 * @Description: 全排列
 * @Author: Friends233
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  const pass = function(ary,start) {
    if(start === ary.length-1){
      result.push(JSON.parse(JSON.stringify(ary)))
    }
    for(let i=start;i<ary.length;i++){
      swip(ary,i,start)
      pass(ary,start+1)
      swip(ary,i,start)
    }
  }
  const swip = function(ary,i,j) {
    let temp = ary[i]
    ary[i] = ary[j]
    ary[j] = temp
  }
  pass(nums,0)
  return result
};
console.log(permute([1,2,3]))
