/*
 * @Description: 54. 螺旋矩阵
 * @Author: Friends233
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let row = matrix[0].length, col = matrix.length
  const ary = []
  let i = 0, j = 0
  let t = 0, b = 1
  while (true) {
    // // console.log(row,col)
    if (row < matrix[0].length / 2 || col < matrix.length/2) return ary
    for (; j < row && matrix[i][j] !== -101; j++) {
      // console.log(i,j)
      ary.push(matrix[i][j])
      matrix[i][j] = -101
    }
    // console.log('-----')
    i++, row--,j--
    for (; i < col && matrix[i][j] !== -101; i++) {
      // console.log(i,j)
      ary.push(matrix[i][j])
      matrix[i][j] = -101
    }
    // console.log('-----')
    j--, col--,i--
    for (; j >= t && matrix[i][j] !== -101; j--) {
      // console.log(i,j)
      ary.push(matrix[i][j])
      matrix[i][j] = -101
    }
    // console.log('-----')
    i--, t++,j++
    for (; i >= b && matrix[i][j] !== -101; i--) {
      // console.log(i,j)
      ary.push(matrix[i][j])
      matrix[i][j] = -101
    }
    j++, b++,i++
    // console.log('-----')
  }
};
// console.log(spiralOrder([[2,5],[8,4],[0,-1]]))