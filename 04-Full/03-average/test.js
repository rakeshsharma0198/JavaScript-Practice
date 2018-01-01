const chai = require('chai')
const should = chai.should()

const ave = require('./index.js')

describe('Tesgin the average function', () => {
  it('shuld retunr a number', () => {
    const input = [2, 3]
    const result = ave(input)

    result.should.be.a('number')
  })

  it('should return 4 when given: [4, 4]', () => {
    const input = [4, 4]
    const result = ave(input)

    result.should.equal(4)
  })

})
