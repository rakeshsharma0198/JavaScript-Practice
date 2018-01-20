




// --------------------------------------------------------------------
// Is palindrome? true or false
const isPalindrome = (str) => {
  let myArr = str.toLowerCase().split("").filter((x) => { return x.match(/[a-z]/) })
  return myArr.join("") === myArr.reverse().join("")
}

console.log( isPalindrome("Madam, I'm Adam") );





// ----------------------------------
// Another way:

function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  return lettersArr.join('') === lettersArr.reverse().join('');
}

isPalindrome("Madam, I'm Adam");


// ----------------------------------
// Just Practice :

const pali = (str) => {
  const one = str.toLowerCase().split("").filter((x) => { return x.match(/[a-z]/) })
  return one.join("") === one.reverse().join("")
}

console.log( pali("Madam, I'm Adam") )


// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// PRACTICE CODE

const isPalindrome = (str) => {
  let word = str.toLowerCase().split("").reverse().join("")
  return (str.toLowerCase() === word) ? true : false
}


console.log( isPalindrome("Elle") )
