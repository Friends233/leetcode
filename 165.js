/*
 * @Description: 比较版本号
 * @Author: Friends233
 */
function pass(version1, version2) {
  const ary1 = version1.split('.'),
    ary2 = version2.split('.')
  const len = Math.max(ary1.length, ary2.length)
  for (let i = 0; i < len; i++) {
    if (ary1[i] !== undefined && ary2[i] !== undefined) {
      if (parseInt(ary1[i]) > parseInt(ary2[i])) {
        return 1
      } else if (parseInt(ary1[i]) < parseInt(ary2[i])) {
        return -1
      }else if(i+1 === len) {
        return 0
      }
    } else {
      if (ary1[i] === undefined && ary2[i] === undefined) {
        return 0
      } else {
        if (ary1[i] === undefined) {
          if (ary2[i] == 0) {
            while (++i < len) {
              if (ary2[i] !== undefined && ary2[i] != 0) {
                return -1
              }
            }
            return 0
          } else {
            return -1
          }
        } else {
          if (ary1[i] == 0) {
            while (++i < len) {
              if (ary1[i] !== undefined && ary1[i] != 0) {
                return 1
              }
            }
            return 0
          } else {
            return 1
          }
        }
      }
    }
  }
}
console.log(pass("1.0", "1.0.0"))