
const should = require('chai').should()
const add = require('../maths')

describe('addition Test', () => {
  it('should return 3 when passed values 1 & 2', () => {
    const num1 = 1
    const num2 = 2
    const expectedValue = 3
    const actualResult = add(num1, num2)

    actualResult.should.equal(expectedValue)
  })
})
