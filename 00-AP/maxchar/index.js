// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// create
// array
// object
// loop obj to find max
// return max char.

function maxChar(str) {
  let num = 0
  let max = ''
  const charMap = str.split("").reduce( (pv, cv) => {
    pv[cv] = ( pv[cv] + 1 ) || 1
    return pv
  }, {} )

  for(z in charMap){
    if(charMap[z] > num){
     num = charMap[z]
     max = z
    }
  }

  return max
}

// console.log(maxChar('abcdefghijklmnaaaaa'))

module.exports = maxChar;
