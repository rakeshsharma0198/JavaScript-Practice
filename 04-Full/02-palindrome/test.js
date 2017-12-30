const chai = require('chai')
const should = chai.should(), expect = chai.expect, assert = chai.assert
const palFun = require('./index.js')

describe("testing the palindrome function", () => {
  it('should return true when givent the string: 1001', () => {
    const input = "1001"
    const functionResult = palFun(input)

    functionResult.should.equal(true)
  })

  it('should rettun: false when given string: abbac', () => {
    const input = "abbac"
    const functionResult = palFun(input)

    functionResult.should.equal(false)
  })

  it('expect false when given: aba', () => {
    const input = "aba"
    const functionResult = palFun(input)

    expect(functionResult).to.equal(true)
  })
})
