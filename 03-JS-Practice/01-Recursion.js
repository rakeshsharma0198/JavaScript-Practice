
// Recursive functions call themselves
// Make sure to write the base exit & Modify the input counter or you will shoot for infinity.

// const recFun = (n) => {
//   if(n <= 0){ return }
//
//   console.log(n)
//   recFun(n - 1)
// }
//
// recFun(5)


// This function will print:
// 5
// 4
// 3
// 2
// 1


// Using recursion to solve Fibonacci

const myFib = (num) => {
  const count = 2
  const arr = [0, 1]

  const recFun = (count) => {
    if(count === num + 1){ return }
    arr.push(arr[count - 1] + arr[count - 2])
    recFun(count + 1)
  }

  recFun(count)
  return arr
}

console.log( myFib(5) )
