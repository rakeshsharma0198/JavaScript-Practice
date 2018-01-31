Location of the series
https://www.quora.com/The-numbers-1-9-25-49-81-121-etc-is-an-example-of-which-series

// -------------------------------------------------------------------------------



// const grid = (num) => {
//
//   // Create a variables
//   let steps = 0
//   let counter = 0
//   let middleValue = 0
//   let breakPoints = []
//   let cornerValues = []
//   // -----------------------------------------------------------------------------------------
//
//   // Load array "BreackPoints" with values [1, 9, 25, 49, ...]
//   do {
//       breakPoints.push( (2 * counter +1)**2 )
//       counter += 1
//   }while (breakPoints[breakPoints.length -1] <= num)
//   if(breakPoints[breakPoints.length -2] === num){ breakPoints.pop() }
//   // -----------------------------------------------------------------------------------------
//
//
//   // Load array "Corner-Vales" with values from last "BreackPoint" 49 = [49, 43, 37, 31]
//   counter = breakPoints[breakPoints.length -1]
//   for(let x = 0; x < 4; x++){
//     cornerValues.push(counter)
//     counter = counter - (Math.sqrt( breakPoints[breakPoints.length -1] ) - 1)
//   }
//   // -----------------------------------------------------------------------------------------
//
//
//   // Identify "Corner-Value" that is greather or equal to "Given-Number".
//   cornerValues.forEach((x) => {
//     if(num <= x){ counter = x }
//   })
//   // -----------------------------------------------------------------------------------------
//
//
//   // Calculate "Midle-Value" of chosen "Corner-Value" range.
//   middleValue = counter - Math.floor( Math.sqrt( breakPoints[breakPoints.length -1] ) / 2 )
//   // -----------------------------------------------------------------------------------------
//
//
//   // Calculate the proximyty "Given-Number" to "Midle-Value" of its "Corner-Value", and save it on "steps"
//   if(num < middleValue){ steps = middleValue - num }
//   if(num > middleValue){ steps = num - middleValue }
//   // -----------------------------------------------------------------------------------------
//
//
//   // Add to steps 1 for each remaining "BreackPoints".
//   steps += ( breakPoints.length -1 )
//   // -----------------------------------------------------------------------------------------
//
//   return steps
// }
//
//
//
// console.log( grid(325489) )
