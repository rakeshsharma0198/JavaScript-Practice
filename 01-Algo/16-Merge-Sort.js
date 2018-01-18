// https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0

let h1 = arr.splice(0, Math.floor(arr.length / 2))
let h2 = arr

console.log(h1);
console.log(h2);

h1 = myMerge(h1)
h2 = myMerge(h2)



// =============================================================================================
// MERGE-SORT
// If you have two sorted arrays, how you can conbinethem and the product be sorted.

const ms13 = (arr) => {

  let halfA = arr.splice(0 , Math.floor(arr.length / 2) )
  let halfB = arr

  halfA = bubbleSort(halfA)
  halfB = bubbleSort(halfB)

  const answer = mergeSort(halfA, halfB)
  console.log(" ");
  console.log("Final: ");
  return answer
}

// --------------------------------------------------------------------------------
// MERGE-SORT

const mergeSort = (arrA, arrB) => {

  const tempArr = []

  while(arrA.length || arrB.length){
    if(arrA[0] <= arrB[0]){ tempArr.push(arrA.shift()) }
    else{ tempArr.push(arrB.shift()) }
  }

  return tempArr
}

// --------------------------------------------------------------------------------
// BUBBLE-SORT

const bubbleSort = (arr) => {

  for(let x = arr.length; x > 0; x--){
    for(let y = 0; y < x; y++){

      if(arr[y] > arr[y + 1]){
        let temp = arr[y]
        arr[y] = arr[y + 1]
        arr[y + 1] = temp
      }

    }
  }

  return arr
}

console.log( ms13([600, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]) );
// console.log( ms13([9, 5, 8, 1, 7, 3, 5, 1 ,8, 6, 7, 12, 84, 62, 99, 15, 0, 1, 2, 77]) );
// ms13([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9])
// ms13([10, 8, 7, 3, 4, 2, 6, 1, 9, 5])
