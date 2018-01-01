// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return process(stringA) === process(stringB)
}

const process = (str) => {
  return str.toLowerCase()
            .split("")
            .filter( (x) => { return x.match( /[a-zA-Z]/ ) } )
            .sort()
            .join("")
}


module.exports = anagrams;



// function anagrams(stringA, stringB) {
//   let arr1 = stringA.toLowerCase().split("")
//   let arr2 = stringB.toLowerCase().split("")
//
//   arr1 = arr1.filter((char) => { return char.match( /[a-zA-Z]/ ) })
//   arr2 = arr2.filter((char) => { return char.match( /[a-zA-Z]/ ) })
//
//   let str1 = arr1.sort().join("")
//   let str2 = arr2.sort().join("")
//
//   return (str1 === str2) ? true : false
// }
