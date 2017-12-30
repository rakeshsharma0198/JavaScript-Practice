// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// const reverseString = (str) => {
//   return str.split("").reverse().join("")
// }
//
// module.exports = reverseString


const reverse = (str) => {
  return str.split("").reverse().join("")
}

module.exports = reverse
