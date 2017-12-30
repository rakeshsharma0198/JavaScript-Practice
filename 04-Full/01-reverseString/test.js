
const chai = require('chai')
const should = chai.should(), expect = chai.expect
const rfun = require('./reverse.js')

describe('Testing Reverse String function', () => {
  it('should return trewq when given: qwert', () => {
    const input = 'qwert'
    const unitTestResult = rfun(input)

    unitTestResult.should.equal('trewq')
  })

  it('expect abcd when given value: dcab', () => {
    const unitTestResult = rfun('dcba')
    expect(unitTestResult).to.equal('abcd')
  })
})
