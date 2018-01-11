

// Location of ifo:
// https://www.youtube.com/watch?v=Oive66jrwBs
// https://www.npmjs.com/package/node-fetch

console.log("JavaScript Practice: 44\n.")

const fetch = require('node-fetch')

const myURL = "https://swapi.co/api/people/1/"

const callFun = async (myURL) => {
  const info = await fetch(myURL, {method: "GET"})
    const { results } = await info.json()
    return await results
}


console.log( callFun(myURL) )
