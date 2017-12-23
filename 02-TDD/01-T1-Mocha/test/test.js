
const should = require('chai').should()
const add = require('../maths')

describe('addition Test', () => {
  it('should return 3 when parameter values are: 1 & 2', () => {
    const num1 = 1
    const num2 = 2
    const expectedValue = 3
    const actualResult = add(num1, num2)

    actualResult.should.equal(expectedValue)
  })

  it('should return 8 when parameter values are: 5 & 3', () => {
    const num1 = 5
    const num2 = 3
    const expectedValue = 8
    const actualResult = add(num1, num2)

    actualResult.should.equal(expectedValue)
  })
})
