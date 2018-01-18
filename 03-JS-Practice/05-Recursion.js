
// --------------------------------------------------------------------------
// Using recursion to count number of characters in a string.

const myRec = (str, num) => {
  if( num >= str.length ){ return num }
  return myRec(str, num + 1)
}

console.log("Chars in string: ", myRec("1234567", 0) )


// --------------------------------------------------------------------------
// Using Recursion to add the values in one array.

const myRec = (arr, total) => {

  if(arr.length > 0){
    total += arr[0]
    arr.shift()
    return myRec(arr, total)
  }else {
    return total
  }

}

const arr = [1, 2, 3, 4]
console.log("The sum is: ", myRec(arr, 0) )  // The sum is:  10

// --------------------------------------------------------------------------
