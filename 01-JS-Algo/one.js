
console.log("GT 25")


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
