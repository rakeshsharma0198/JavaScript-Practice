
// console.log("Hello from here...");

const isPalindrome = (str) => {
  console.log(str);
// const word = str.toLowerCase().split("").reverse().join("")
const word = str.toLowerCase().split("").reverse().join("")
  console.log(word);

  if(str.toLowerCase() === word){
    return true
  }else{
    return false
  }

}


console.log( isPalindrome("Elle") )
