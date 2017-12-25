
const chai = require('chai')
const add = require('./math.js')
const should = chai.should()

describe('test add function', () => {
  it('should return 5 when given values: 2 & 3', () => {
    const value1 = 2
    const value2 = 3
    const expected = 5

    const unitTestResult = add( value1, value2 )
    unitTestResult.should.equal(expected)
  })
})
