// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


    // Using single line
function reverse(str) {
  return str.split("").reverse().join("")
}


    // Using Reduce()
const reverse = (str) => {
  return str.split('').reduce((reversed, character)=>{
    return character + reversed
  }, '')
}



  // Using a For loop
function reverse(str) {

  const arr = []
  for(let x = str.length; x >= 0; x--){
    arr.push(str[x])
  }

  return arr.join("")
}


// Using the ES5 For Loops
function reverse(str) {

  let reversed = ''
  for(let character of str){
    reversed = character + reversed
  }

  return reversed

}


   // Exporting the Module.
module.exports = reverse;
