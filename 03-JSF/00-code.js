// Fiz Buzz

console.log("Hello 2")

for(let x = 0; x < 101; x++){
  if( (x % 3 == 0) && (x % 5 === 0) ){
    console.log("The number: " + x + " is Fizz-Buzz");
  } else if (x % 3 == 0) {
    console.log("The number: " + x + " is Fizz");
  }else if (x % 5 == 0) {
    console.log("The number: " + x + " is Buzz");
  }else {
    console.log("The number: " + x + " NA");
  }
}


// Not using For Loops
const fb = new Array(101).fill("a").map(
  (c, i, ) => { console.log(
      ((i % 3 === 0) && (i % 5 === 0) ) ? `Number ${i} is Fiz-Buzz`  :
       (i % 3 === 0) ? `Number ${i} is Fizz`  :
       (i % 5 === 0) ? `Number ${i} is Buzz`  : `Number ${i} NA`
   ) }
)
