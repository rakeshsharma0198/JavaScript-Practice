
// Instructions.
// 01- create an array from 0 to 11 numbers inside
// 02- insert two duplicate numbers in a random places
// 03- create a function that finds waht are the duplicate numbers.

const dup = (arr) => {
  const dups = []
  const ocurrencses = arr.reduce( (pv, cv) => {
    pv[cv] = ( pv[cv] + 1 ) || 1
    return pv
  }, {} )

  for(z in ocurrencses){
    if( ocurrencses[z] > 1 ){ dups.push(z) }
  }

  return dups
}

let myArr = Array(11).fill(1).map((c, i) => { return i })  // Creating the array
myArr.splice(Math.floor(Math.random() * 10), 0, Math.floor(Math.random() * 10))  // inserting raundom number in random position.
myArr.splice(Math.floor(Math.random() * 10), 0, Math.floor(Math.random() * 10))  // inserting raundom number in random position.
console.log(myArr);

console.log(dup(myArr))
