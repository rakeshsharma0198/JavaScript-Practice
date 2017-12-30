const chai = require('chai')
const add = require('./math.js')
const should = chai.should()
const expect = chai.expect
const assert = chai.assert
// const to = chai.to

describe('test add function', () => {
  it('should return 5 when give values: 1 & 4', () => {
    const value1 = 1, value2 = 4, expectedValue = 5
    const unitTestResult = add(value1, value2)

    unitTestResult.should.equal(expectedValue)
  })

  it('expect value 7 when given values: 3 & 4', () => {
    const value1 = 3, value2 = 4, valueExpected = 7
    const unitTestResult = add(value1, value2)

    expect(unitTestResult).to.be.a('number')
  })

  it('assert typeof === number', () => {
    const value1 = 1, value2 = 2, expected = 'number'
    const unitTestResult = add(value1, value2)

    assert.typeOf(unitTestResult, expected, 'value is a number')
  })
})
