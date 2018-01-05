
const chai = require('chai')
const should = chai.should()

const revStr = require('./index.js')

describe('Testing RevString Function: ', () => {
  it('shold return a string when input is string', () => {
    const input = 'hello'
    const output = revStr(input)

    output.should.be.a('string')
  })

  it('should return: olleh when input is hello', () => {
    const input = 'hello'
    const output = revStr(input)

    output.should.equal('olleh')
  })
})
