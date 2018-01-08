
// Recursive functions call themselves
// Make sure to write the base exit & Modify the input counter or you will shoot for infinity.

const recFun = (n) => {
  if(n <= 0){ return }

  console.log(n)
  recFun(n - 1)
}

recFun(5)


// This function will print:
// 5
// 4
// 3
// 2
// 1
