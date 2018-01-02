// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let counter = 0
  let strow = 0, endrow = (n - 1)
  let stcol = 0, endcol = (n - 1)


  let results = Array(n).fill(1).map((x) => { return [] })

  

  return results
}





console.log( matrix(2) );

module.exports = matrix;

// create an array with values from 1 to (n * n)
// create two dimentional matrix array fill with "x"



// let arr1 = subArr(Array(n * n).fill("x"), n)
//
// const subArr = (arr1, n) => {
//   let tempArr = []
//   while(arr1.length > 0){
//     tempArr.push(arr1.splice(0, n))
//   }
//   return tempArr
// }
