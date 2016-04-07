import PasswordRevealer from '../src/index.js'
import chai from 'chai'
import jsdom from 'mocha-jsdom'
const expect = chai.expect
let instance, input

chai.use(require('chai-dom'))

describe('Given an PasswordRevealer instance', function () {

  jsdom()

  before(function () {
    input = document.createElement('input')
    instance = PasswordRevealer(input)
  })

  describe('Public methods', function () {
    describe('#showPassword()', function () {
      it('target should have type "text"', () => {
        instance.showPassword()
        expect(input).to.have.attribute('type', 'text')
      })
    })

    describe('#hidePassword()', function () {
      it('target should have type "password"', () => {
        instance.hidePassword()
        expect(input).to.have.attribute('type', 'password')
      })
    })

    describe('#togglePassword()', function () {
      it('target should have type "text" when target is initially unrevealed', () => {
        instance.togglePassword()
        expect(input).to.have.attribute('type', 'text')
      })

      it('target should have type "password" when target is initially revealed', () => {
        instance = PasswordRevealer(input, false, {
          isRevealed: true
        })

        instance.togglePassword()
        expect(input).to.have.attribute('type', 'password')
      })
    })
  })

})
