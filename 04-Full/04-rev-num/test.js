const chai = require('chai')
const should = chai.should()

const numRev = require('./index.js')

describe('Test the revNum function', () => {
  it('should return a number', () => {
    const input = 7
    const output = numRev(input)

    output.should.be.a('number')
  })

  it('should return -51 when input: -15', () => {
    const input = -15
    const output = numRev(input)

    output.should.equal(-51)
  })

  it('should return 189 when input: 981', () => {
    const input = 981
    const output = numRev(input)

    output.should.equal(189)
  })

  it('should return -9 when input: -90', () => {
    const input = -90
    const output = numRev(input)

    output.should.equal(-9)
  })
})
