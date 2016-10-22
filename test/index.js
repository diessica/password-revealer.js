import test from 'ava'
import { expect } from 'chai'
import sinon from 'sinon'
import PasswordRevealer from '../src'

let input

test.before(() => {
  input = document.createElement('input')
})

test('password must be shown when asked', () => {
  const instance = PasswordRevealer(input)

  instance.show()
  expect(input).to.have.attribute('type', 'text')
})

test('password must be shown when asked', () => {
  const instance = PasswordRevealer(input)

  instance.hide()
  expect(input).to.have.attribute('type', 'password')
})

test('password must be initially shown', () => {
  PasswordRevealer(input, {
    isRevealed: true
  })

  expect(input).to.have.attribute('type', 'text')
})

test('password must be toggled', () => {
  const instance = PasswordRevealer(input, {
    isRevealed: true
  })

  instance.toggle()
  expect(input).to.have.attribute('type', 'password')
})

test('must init trigger in default selector', (t) => {
  const myTrigger = document.createElement('div')
  myTrigger.setAttribute('class', 'PasswordRevealer-trigger') // Default class
  document.body.appendChild(myTrigger)

  const instance = PasswordRevealer(input)
  const toggleSpy = sinon.spy()

  instance.init(toggleSpy)
  myTrigger.click()

  expect(toggleSpy).to.have.been.calledOnce
})

test('must init trigger in selector provided', (t) => {
  const myTrigger = document.createElement('div')
  myTrigger.setAttribute('id', 'custom-trigger')
  document.body.appendChild(myTrigger)

  const instance = PasswordRevealer(input, {
    trigger: {
      selector: '#custom-trigger'
    }
  })
  const toggleSpy = sinon.spy()

  instance.init(toggleSpy)
  myTrigger.click()

  expect(toggleSpy).to.have.been.calledOnce
})

test('must init trigger in DOM element provided', (t) => {
  const myTrigger = document.createElement('div')
  document.body.appendChild(myTrigger)

  const instance = PasswordRevealer(input, {
    isRevealed: true,
    trigger: { selector: myTrigger }
  })
  const toggleSpy = sinon.spy()

  instance.init(toggleSpy)
  myTrigger.click()

  expect(toggleSpy).to.have.been.calledOnce
})

test('must throw error if input is not provided', (t) => {
  expect(PasswordRevealer).to.throw('Missing input argument')
})

test('must throw error if provided element is not an input', (t) => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const instance = () => PasswordRevealer(div)

  expect(instance).to.throw('First argument (input) must be an input element')
})

test('must throw error if trigger element does not exist', (t) => {
  const instance = () => (
    PasswordRevealer(input, { trigger: { selector: '#my-trigger' } }).init()
  )

  expect(instance).to.throw('Trigger must be an HTML element')
})
