/**
 * password-revealer.js
 * Easily reveal/hide passwords in input fields.
 *
 * @version 1.0.0
 * @author Diéssica Gurskas <http://github.com/diessica>
 * @license MIT
 */
import deepAssign from 'deep-assign'

/**
 * @param {String|HTMLElement} input
 * @param {Object} options
 */
const PasswordRevealer = (input, options) => {
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

  const show = () => {
    input.type = 'text'
    isPasswordRevealed = true
  }

  const hide = () => {
    input.type = 'password'
    isPasswordRevealed = false
  }

  const toggle = () => {
    isPasswordRevealed
      ? hide()
      : show()
  }

  if (isPasswordRevealed) show()

  const init = () => {
    const trigger = document.querySelector(options.trigger.selector)

    if (!trigger) {
      throw new Error(`Element "${options.trigger.selector}" must exist to init the trigger`)
    }

    trigger.addEventListener(options.trigger.eventListener, toggle)
  }

  return {
    show,
    hide,
    toggle,
    init
  }
}

export default PasswordRevealer
