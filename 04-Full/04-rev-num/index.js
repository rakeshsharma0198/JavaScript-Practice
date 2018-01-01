
const numRev = (num) => {
  return parseInt( Math.abs(num)
  .toString()
  .split("")
  .reverse()
  .join("") ) * Math.sign(num)
}

// console.log( numRev(1500) );

module.exports = numRev
