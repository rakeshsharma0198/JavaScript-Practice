
// Exponential run Time

function fib(n) {
 count = 0
 let arr = [0, 1]

 let myFib = (count) => {
   if(count === n - 1){ return }
   arr.push(arr[count] + arr[count + 1])
   myFib(count + 1)
 }

 myFib(count)
 return arr
}


console.log(fib(10));


// --------------------------------------------------

const fibRec2 = (position) => {
  if(position < 3) { return 1}
  else{ return fibRec2(position - 1) + fibRec2(position - 2) }
}


console.log(fibRec2(12))


// --------------------------------------------------
// Memoised Linear Time

const fibMemo = (index, cache) => {
  cache = cache || []

  if(cache[index]){ return cache[index] }
  else{
    if(index < 3){ return 1 }
    else{ cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache) }
  }

  return cache[index]
}


console.log( fibMemo(1477) );
