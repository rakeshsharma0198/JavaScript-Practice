
// const should = require('chai').should()

const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const assert = chai.assert

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

  it('expect 10 when given values 4 & 6 ', () => {
    const value1 = 4
    const value2 = 6
    const expectedValue = 10

    const unitResult = add( value1, value2 )
    expect(unitResult).to.equal(expectedValue)
  })

  it('assert equality between expectedValue = 16 and unitResult when given values: 11 & 5', () => {
    const value1 = 11
    const value2 = 5
    const expectedValue = 16

    const unitResult = add( value1, value2 )
    assert.equal(unitResult, expectedValue, " Test not passed ;( ")
  })

})
