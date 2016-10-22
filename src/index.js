/**
 * password-revealer.js
 * Easily reveal/hide passwords in input fields.
 *
 * @version 1.1.0
 * @author Diéssica Gurskas <http://github.com/diessica>
 * @license MIT
 */
import merge from 'merge-deep'

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
    options = merge({}, defaults, options)
  } else {
    options = defaults
  }

  let { isRevealed } = options

  const show = () => {
    input.type = 'text'
    isRevealed = true
  }

  const hide = () => {
    input.type = 'password'
    isRevealed = false
  }

  const toggle = () => {
    isRevealed
      ? hide()
      : show()
  }

  if (isRevealed) show()

  const init = (triggerAction = toggle) => {
    const { selector, eventListener } = options.trigger

    let trigger = selector

    if (typeof selector === 'string' || selector instanceof String) {
      trigger = document.querySelector(selector)
    }

    if (!trigger.nodeType) {
      throw new Error('Trigger must be an HTML element')
    }

    trigger.addEventListener(eventListener, triggerAction)
  }

  return {
    show,
    hide,
    toggle,
    init
  }
}

export default PasswordRevealer
