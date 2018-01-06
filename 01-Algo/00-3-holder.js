

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
