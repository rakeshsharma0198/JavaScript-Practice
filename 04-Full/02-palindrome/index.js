
const palindrome = (str) => {
  return (str === str.split("").reverse().join("")) ? true : false
}

module.exports = palindrome

// if(str.length % 2 !== 0){
//   return false
// } else {
//
//   if(str.)
//   return true
// }
