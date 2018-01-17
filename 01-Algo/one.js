console.log('JavaScript: 25 \n')

const meso = (arr) => {
  let origarr = arr.length
  if(arr.length <= 1){ return arr }

  let a = meso( arr.splice(0, Math.floor(arr.length / 2)) )
  let b = meso( arr )

  // Array that will hold the result
  let result = []

  console.log(a);
  console.log(b);
  console.log(" ");

}

console.log( meso([9, 5, 7, 6, 1, 2, 8, 3, 4, 5]) );
