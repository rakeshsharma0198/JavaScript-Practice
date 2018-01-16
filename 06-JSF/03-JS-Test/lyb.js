

// const core = [1, 2, 3]
const core = {
  name: "MyCore",
  add: (a, b) => { return a + b },
  sprite: (arr) => {
      let ans = arr.toLowerCase()
                   .split("")
                   .filter((x) => { return x.match(/[a-z]/) })
                   .reduce((pv, cv) => {
                      pv[cv] = (pv[cv] + 1 ) || 1
                      return pv
                    }, {})
      return ans
    }
}


exports.default = core

// -----------------------------------------------------------------
// Code in the file that will call the created library

let core = require('./lyb')
core = core.default

console.log( core.name );
console.log( core.add(5, 2) );
console.log( core.sprite("outrageous-ambiguous-ortopedic") );
