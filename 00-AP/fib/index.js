// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3



function fib(n) {
  count = 2
  let arr = [0, 1]

  let myFib = (count) => {
    if(count === n + 1){ return }
    arr.push(arr[count - 2] + arr[count - 1])
    myFib(count + 1)
  }

  myFib(count)
  return arr[n]
}



// console.log(fib(10));  [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
module.exports = fib;

// -----------------------------------------------------------------------------
// const fib = (n) => {
//   if(n < 2){ return n }
//   return fib(n - 1) + fib(n - 2)
// }



// -----------------------------------------------------------------------------
// function fib(n) {
//   let arr = Array(n).fill("a")
//   let temp = 0
//   let p1 = 0
//   let p2 = 1
//
//   arr = arr.map((c, i) => {
//                   if (i === 1){
//                     temp = 1
//                   }else{
//                     temp = p1 + p2
//                     p1 = p2
//                     p2 = temp
//                   }
//                   return temp
//             })
//   return arr[arr.length - 1]
// }
