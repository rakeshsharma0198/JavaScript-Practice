const chai = require('chai')
const add = require('./Math.js')
const sould = chai.should()

describe('test for add function', () => {
  it('should return 7 when given the values: 3 &b 4', () => {
    const val1 = 3
    const val2 = 4
    const expected = 7

    const unitTestResult = add( val1, val2)
    unitTestResult.should.equal(expected)
  })

  it('should return 10 when given the values: 4 & 6', () => {
    const val1 = 4
    const val2 = 6
    const expected = 10

    const unitTestResult = add(val1, val2)
    unitTestResult.should.equal(expected)
  })


})
