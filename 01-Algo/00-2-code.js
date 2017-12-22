console.log('Algo 2')
console.log(" ");






const subDv = (arr, num) => {
      var tempArr = []
      while (arr.length > 0) {
        tempArr.push(arr.splice(0, num))
      }
      return tempArr
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log( subDv( arr1 , 2 ))



[ [1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12] ]
