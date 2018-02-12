
console.log("GT 25")

// create function
// inititalize conunter to 0
// initilize sequence to [0, 1]
//   initialize recFunction
//     when counter equals num -1 return
//     sequence push ( sequence@counter + secuence@counter+1 )
//     call recFunction(passing counter +1)
// call recFunction
// return sequence


function fib(num) {
  let counter = 0
  let data = [0, 1]

  const myRec = (counter) => {
    if(counter === num -1){ return }
    data.push( data[counter] + data[counter + 1] )
    myRec(counter + 1)
  }

  myRec(counter)
  return data

}


console.log(fib(10));
