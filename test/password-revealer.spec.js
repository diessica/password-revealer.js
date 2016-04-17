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
    describe('#show()', function () {
      it('target should have type "text"', () => {
        instance.show()
        expect(input).to.have.attribute('type', 'text')
      })
    })

    describe('#hide()', function () {
      it('target should have type "password"', () => {
        instance.hide()
        expect(input).to.have.attribute('type', 'password')
      })
    })

    describe('#toggle()', function () {
      it('target should have type "text" when target is initially unrevealed', () => {
        instance.toggle()
        expect(input).to.have.attribute('type', 'text')
      })

      it('target should have type "password" when target is initially revealed', () => {
        instance = PasswordRevealer(input, {
          isRevealed: true
        })

        instance.toggle()
        expect(input).to.have.attribute('type', 'password')
      })
    })
  })

})
