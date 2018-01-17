
const meso = (arr) => {
  console.log(arr);
  let arr2 = []
  // let n = arr.length
  if(arr.length > 1){
    arr2 = arr.splice(0, Math.floor(arr.length / 2) )
  }else {
    return
  }


  if( meso(arr) <= meso(arr2) ){
    return [ meso(arr), meso(arr2) ]
  }else {
    return [ meso(arr2), meso(arr) ]
  }

}

console.log( meso([9, 5, 7, 6, 1, 2, 8, 3, 4, 5]) );


// ---------------------------------------------------------------------

const bubble = (arr) => {
  for(let x = arr.length; x > 0; x--){
    for(let y = 0; y < x; y++){
      if( arr[y + 1] < arr[y] ){
        let temp = arr[y]
        arr[y] = arr[y + 1]
        arr[y + 1] = temp
      }
    }
  }
  return arr
}

console.log( bubble([9, 5, 7, 6, 1, 2, 8, 3, 4, 5]) );



// ------------------------------------------------------------


const twoSum = (arr, num) => {
  const table = []
  const results = []

  for(let x = 0; x < arr.length; x++){
    let currentNumber = arr[x]
    let counterpart = num - currentNumber

    if(table.includes(counterpart)){ results.push( [currentNumber, counterpart] ) }
    table.push(currentNumber)
  }

  return results
}


console.log( twoSum([1, 6, 4, 5, 3, 3], 7) )
