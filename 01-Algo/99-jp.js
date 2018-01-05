
// -------------------------------------------------
// Recursive Fibonacci Function

const myFib = (num) => {
  const serie = [0, 1]
  let count = 2

  const myRecFun = (count) => {
    if(count === num + 1){ return }
    serie.push((serie[count - 1]) + (serie[count - 2]))
    myRecFun(count + 1)
  }

  myRecFun(count)
  return serie
}

console.log(myFib(7))



// -------------------------------------------------
// Converst a 1 Dim array to 2 Dim arrays

const twoDim = (arr, num) => {
  const holder = []

  while(arr.length > 0){
    holder.push( arr.splice(0, num) )
  }

  return holder
}

console.log( twoDim([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) )
