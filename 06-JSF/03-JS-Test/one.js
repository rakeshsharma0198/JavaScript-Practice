

const mySort( h1, h2 ){
  let result = []
  let idxH1 = 0
  let idxH2 = 0


}


const myMerge = (arr) => {

  if(arr.length === 1){ return arr }

  let h1 = arr.splice(0, Math.floor(arr.length / 2))
  let h2 = arr

  return mySort( h1, h2 )
}

const arr = [1, 9, 6, 5, 8, 3, 7, 0, 2, 4]
console.log( myMerge(arr) )
