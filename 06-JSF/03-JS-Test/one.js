// ---------------------------------------------------------
//   This function concatenate the arrays by value order
const joinarr = ( h1, h2 ) => {
  let result = []

  while ( h1.length || h2.length ) {
    if(h1[0] < h2[0] || h2[0] === undefined && h1[0] !== undefined ){ result.push( h1.shift()) }
    if(h1[0] > h2[0] || h1[0] === undefined && h2[0] !== undefined ){ result.push( h2.shift()) }
  }

  return result
}


// ---------------------------------------------------------
//   This is the recursive function that splits the array until it has only single items arrays
const myMerge = (arr) => {

  if(arr.length === 1){ return arr }

  let h1 = arr.splice(0, Math.floor(arr.length / 2))
  let h2 = arr

  return joinarr( myMerge(h1), myMerge(h2) )
}



// ---------------------------------------------------------
//   Callgin the primary recursive functions
const arr = [1, 9, 6, 5, 8, 3, 7, 0, 2, 4]
console.log( myMerge(arr) )   // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// -------------------------------------------------------------------------------------

// let arr1 = []
// let arr2 = [4]
//
// console.log(arr1[0]);
// console.log(arr2[0]);
//
// if(arr1[0] > arr2[0] || arr2[0] === undefined ){ console.log("The largest is: ", arr1[0]); }
// if(arr1[0] < arr2[0] || arr1[0] === undefined ){ console.log("The largest is: ", arr2[0]); }

// if(arr1.length){ console.log("No Vacio"); } True
// if(arr2.length){ console.log("arr2 empty"); } False
// -------------------------------------------------------------------------------------
