/*
 * @Description: 排序数组(快速排序)
 * @Author: Friends233
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
  const Qsort = function(left, right, num) {
    if(left >= right) {
        return num
    }
    let base = num[right],l = left, r = right
    while(left < right) {
        while(left < right && num[left] <= base) {
            left++
        }
        while(left < right && num[right] >= base) {
            right--
        }
  
        if(left < right) {
            // let temp = num[left]
            // num[left] = num[right]
            // num[right] = temp
            [num[left], num[right]] = [ num[right], num[left] ]
        }
    }
    num[r] = num[right]
    num[right] = base
  
    Qsort(l, right-1, num)
    Qsort(right+1, r, num)
  
    return num
  }
  return Qsort(0,nums.length-1,nums)
};
console.log(sortArray([5,2,3,1]))
