/**
 * password-revealer.js
 * Easily reveal/hide passwords in input fields.
 *
 * @version 0.1.0
 * @author Diéssica Gurskas <http://github.com/diessica>
 * @license MIT
 */
import deepAssign from 'deep-assign'

/**
 * @param {String|HTMLElement} input
 * @param {Boolean} initTrigger
 * @param {Object} options
 */
const PasswordRevealer = (input, initTrigger = false, options) => {
  const defaults = {
    isRevealed: false,
    trigger: {
      selector: '.PasswordRevealer-trigger',
      eventListener: 'click'
    }
  }

  if (!input) {
    throw new Error('Missing input argument')
  }

  if (initTrigger && typeof initTrigger !== 'boolean') {
    throw new Error('Second argument (initTrigger) must be a boolean value')
  }

  if (typeof input === 'string') {
    input = document.querySelector(input)
  }

  if (input.nodeName !== 'INPUT') {
    throw new Error('First argument (input) must be an input element')
  }

  if (!input.nodeType) {
    throw new Error('First argument (input) must be an element')
  }

  if (typeof options === 'object') {
    options = deepAssign(defaults, options)
  } else {
    options = defaults
  }

  let isPasswordRevealed = options.isRevealed

  const showPassword = () => {
    input.type = 'text'
    isPasswordRevealed = true
  }

  const hidePassword = () => {
    input.type = 'password'
    isPasswordRevealed = false
  }

  const togglePassword = () => {
    isPasswordRevealed
      ? hidePassword()
      : showPassword()
  }

  if (isPasswordRevealed) showPassword()

  if (initTrigger) {
    const trigger = document.querySelector(options.trigger.selector)

    if (!trigger) {
      throw new Error(`Element "${options.trigger.selector}" must exist to init the trigger`)
    }

    trigger.addEventListener(options.trigger.eventListener, togglePassword)
  }

  return {
    showPassword,
    hidePassword,
    togglePassword
  }
}

export default PasswordRevealer
