
const should = require('chai').should()
const add = require('../math.js')

describe('test for add function', () => {
  it('should return 5 when given values: 2 & 3', () => {
    const value1 = 2
    const value2 = 3
    const expectedValue = 5

    const unitResult = add( value1, value2 )
    unitResult.should.equal(expectedValue)
  })

  it('should return 11 when given values: 5 & 6', () => {
    const value1 = 5
    const value2 = 6
    const expectedValue = 11

    const unitResult = add( value1, value2 )
    unitResult.should.equal(expectedValue)
  })
})
