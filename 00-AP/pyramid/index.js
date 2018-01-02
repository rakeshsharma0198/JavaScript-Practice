// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

  let hash = 1
  let str = ""


  let arr = Array(n).fill("q")
  arr = arr.map((x, i) => {
    ((i + 1) === arr.length) ? str = "#".repeat(hash) :
                               str = " ".repeat((arr.length - 1) - i) + "#".repeat(hash) + " ".repeat((arr.length - 1) - i)
    hash = hash + 2
    return str
   })

  arr.forEach( (x) => { console.log(x) } )

  return arr
}

console.log(pyramid(5));

module.exports = pyramid;


// function pyramid(n) {
//   // const arr = Array(n).fill(1).map((c, i) => { console.log( " ".repeat() + "#".repeat(i + 1) + " ".repeat() ) })
//
//   // let spaces = 0
//   let hash = 1
//   let str = ""
//
//
//   let arr = Array(n).fill("q")
//   arr = arr.map((x, i) => {
//     if((i + 1) === arr.length){
//       str = "#".repeat(hash)
//     }else{
//       str = " ".repeat((arr.length - 1) - i) + "#".repeat(hash) + " ".repeat((arr.length - 1) - i)
//     }
//     hash = hash + 2
//     return str
//    })
//
//   arr.forEach( (x) => { console.log(x) } )
//
//
//   return arr
//
// }
//
// console.log(pyramid(5));
