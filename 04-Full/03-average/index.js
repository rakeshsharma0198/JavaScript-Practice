
const ave = (arr) => {

  return arr.reduce((pv, cv) => { return pv + cv }, 0) / arr.length
}

// ave([2, 3])

module.exports = ave
