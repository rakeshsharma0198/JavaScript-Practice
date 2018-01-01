console.log("Run 2");

const duplicates = (arr) => {
  const dups = []
  const ocurrencses = arr.reduce( (pv, cv) => {
    pv[cv] = ( pv[cv] + 1 ) || 1
    return pv
  }, {} )

  for(z in ocurrencses){
    if( ocurrencses[z] > 1 ){ dups.push(z) }
  }

  return dups
}


let arr = Array(11).fill(1).map((c, i) => { return i })
arr.splice(Math.floor(Math.random() * 10), 0, Math.floor(Math.random() * 10))
arr.splice(Math.floor(Math.random() * 10), 0, Math.floor(Math.random() * 10))

// let arr = [1, 2, 3, 2]

console.log(arr);

console.log( duplicates(arr) );
