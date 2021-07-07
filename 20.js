/*
 * @Description: 有效的括号
 * @Author: Friends233
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const left = ['(', '{', '[']
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const a = s.charAt(i)
    if (left.includes(a)) {
      stack.push(a)
    } else {
      if (stack.length === 0) {
        return false
      }
      const p = stack.pop()
      if (a === ')' && p !== '(' || a === '}' && p !== '{' || a === ']' && p !== '[') {
        return false
      }
    }
  }
  return stack.length === 0
};
console.log(isValid('([]{})'))