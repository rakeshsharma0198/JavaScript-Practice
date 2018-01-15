
The ...Spreaad Operator


const myRest = (a, b, c, ...wakabi) => {
  console.log(a + b +c)      // 6
  console.log(...wakabi);    // 4 5 6 [ 'a', 12, 'cat' ]
}


let a = 1,  b = 2, c = 3, d = 4, e = 5, f = 6, g = ["a", 12, "cat"]
myRest(a, b, c, d, e, f, g)
