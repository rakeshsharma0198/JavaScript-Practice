console.log('JavaScript: 4 \n')

const twoSum = (arr, num) => {
  const table = []
  const results = []

  for(let x = 0; x < arr.length; x++){
    let currentNumber = arr[x]
    let counterpart = arr[x]

    if(table.includes(counterpart)){ results.push([currentNumber, counterpart]) }
    table.push(currentNumber)
  }

  return results
}
