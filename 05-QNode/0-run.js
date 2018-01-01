console.log("Run 2");


// const duplicates = (arr) => {
//   return (arr.reduce( (pv, cv) => { return pv + cv }, 0) ) / arr.length
// }



// let arr = Array(11).fill(1).map((c, i) => { return i })
// arr.splice(Math.floor(Math.random() * 10), 0, Math.floor(Math.random() * 10))
// arr.splice(Math.floor(Math.random() * 10), 0, Math.floor(Math.random() * 10))

// const arr = [5, 10, 25, 15]
//
// console.log(arr);
//
// console.log( duplicates(arr) );



const dollars = [5, 10, 25, 15];

const ave = (arr) => {
 return (arr.reduce( (pv, cv) => { return pv + cv }, 0) ) / arr.length
}

console.log( ave(dollars))
