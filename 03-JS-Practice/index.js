// JS Code practice Place.

// Location of ifo:
// https://www.youtube.com/watch?v=Oive66jrwBs
// https://www.npmjs.com/package/node-fetch

console.log("JavaScript Practice: 45\n.")

const fetch = require('node-fetch')

const myURL = "https://swapi.co/api/people/1/"

const callFun = async (myURL) => {
  const info = await fetch(myURL, {method: "GET"})
    const data = await info.json()
    return await data
}


console.log( callFun(myURL) )


// =================================================================
// const fetch = require('node-fetch')
//
// const myURL = "https://swapi.co/api/people/1/"
//
// const callFun = async (myURL) => {
//   const info = await fetch(myURL, {method: "GET"})
//     const { results } = await info.json()
//     return await results
// }
//
//
// console.log( callFun(myURL) )


// ---------------------------------------------------------------
// Questions 37 missing a f
//
// var flowers = new Map()
// var key = 'rose', other = {}
//
// flowers.set(key, "red")   <------------------------  Missing F at beginning
// flowers.set(other, 'not_available')
//
// console.log( flowers.get(key) );
