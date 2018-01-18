
// --------------------------------------------------------------------------
// Using recursion to count number of characters in a string.

const myRec = (str, num) => {
  if(num >= str.length + 1){ return num }
  console.log(num)
  // myRec(str, num + 1)
  return myRec(str, num + 1)
}

console.log("Value return: ", myRec("1234567", 0) )


// --------------------------------------------------------------------------
// Using Recursion to add the values in one array.

const myRec = (arr, total) => {

  if(arr.length > 0){
    total += arr[0]
    arr.shift()
    console.log(arr)
    console.log(total)
    console.log(" ")
    return myRec(arr, total)
  }else {
    console.log("returning total: ", total)
    return total
  }

}

const arr = [1, 2, 3, 4]
console.log("What I got: ", myRec(arr, 0) )

// --------------------------------------------------------------------------
