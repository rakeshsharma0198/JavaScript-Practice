
console.log("Hello from here...");

const isPalindrome = (str) => {
  let word = str.toLowerCase().split("").reverse().join("")
  return (str.toLowerCase() === word) ? true : false
}


console.log( isPalindrome("Elle") )
