console.clear()
console.log("\n=====================================\n");
// ------------------------------------------------------------

const myRest = (a, b, c, ...wakabi) => {
  console.log(a + b +c)
  console.log( ...wakabi );
}


let a = 1,  b = 2, c = 3, d = 4, e = 5, f = 6, g = ["a", 12, "cat"]
myRest(a, b, c, d, e, f, g)


// console.log( myRest(a, b, c, d, e, f, g) )

// ------------------------------------------------------------
console.log("\n=====================================\n");
