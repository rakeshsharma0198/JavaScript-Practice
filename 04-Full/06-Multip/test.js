const chai = require('chai')
const should = chai.should()
const Multiply = require('./index.js')

describe('Testing the function Multiply', () => {
  it('should return a number, when inputs are numbers', () => {
    const input1 = 22
    const input2 = 23
    const output = Multiply(input1, input2)

    output.should.be.a('number')
  })

  it('should return 10 when inputs are: 2 & 5', () => {
    const input1 = 2
    const input2 = 5
    const output = Multiply(input1, input2)

    output.should.equal(10)
  })

  it('should return 21 when inputs are: 3 & 7', () => {
    const input1 = 3
    const input2 = 7
    const output = Multiply(input1, input2)

    output.should.equal(21)
  })
})
