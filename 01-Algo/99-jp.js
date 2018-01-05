
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


// -------------------------------------------------
// Find the mospopular letter in a string

const maxChar = (str) => {
  const mapObj = str.split('').reduce((pv, cv) => {
    pv[cv] = (pv[cv] + 1) || 1
    return pv
  }, {})

  let max = 0, letter = ''

  for(z in mapObj){
    if(mapObj[z] > max){
      max = mapObj[z]
      letter = z
    }
  }

  return letter

}

console.log( maxChar('laksdjf;laskdfjlaskfdjalskfjd;laksjdfsdfkjdfkkldkjfldkjflskdjflskf') )


// -------------------------------------------------
// Bubble Sort

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

console.log(bubbleSort([8, 6, 1, 9, 3, 1, 7, 9, 7, 4, 5]));
