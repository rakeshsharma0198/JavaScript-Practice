Location of the series
https://www.quora.com/The-numbers-1-9-25-49-81-121-etc-is-an-example-of-which-series

Create a variables named: "steps" = 0, "counter" = 0, "BreackPoints" = [] .....
Load array "BreackPoints" with values [1, 9, 25, 49, ...]
Load array "Corner-Vales" with values from last "BreackPoint" 49 = [49, 43, 37, 31]
Identify "Corner-Value" that is greather or equal to "Given-Number".
Calculate "Midle-Value" of chosen "Corner-Value" range.
Calculate the proximyty "Given-Number" to "Midle-Value" of its "Corner-Value", and save it on "steps"
Add to steps 1 for each remaining "BreackPoints".



const grid = (num) => {
  return Math.sqrt(num)
  // const corner = (2*num +1)**2
  return corner
}

console.log( grid(24) )



// ========================================================================================
const grid = (num) => {
  let steps = 0
  let breakPoints = []

  let n_sqrt = Math.sqrt(num)
  console.log(n_sqrt);

  let maxBreakPoint = 3
  let corner = (2 * maxBreakPoint +1)**2

  return corner
}
