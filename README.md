# [password-revealer.js](https://diessi.ca/password-revealer.js/) [![npm version](https://img.shields.io/npm/v/password-revealer.svg)](https://www.npmjs.com/package/password-revealer)  [![Build Status](https://travis-ci.org/diessica/password-revealer.js.svg)](https://travis-ci.org/diessica/password-revealer.js)

> Easily reveal/hide passwords in input fields.

## Motivation
Mainly because the "Confirm Password" field must die.

## Install
Get it using [npm](https://www.npmjs.com):
```
npm install password-revealer --save
```

Or [download the ZIP file](https://github.com/diessica/password-revealer.js/archive/master.zip) and use it as you want.

## Usage
> See [basic demo](examples/basic-demo.html) (without npm) and [live examples](https://diessi.ca/password-revealer.js/).

Using npm:
```js
import PasswordRevealer from 'password-revealer' // ES2015 module syntax

PasswordRevealer('#password-field')
```

### `PasswordRevealer(input[, options])`

#### `input`

Type: `string` or `HTMLElement`

Input field that will have its password revealed or hidden.<br><br>  

#### `options`
Type: `object`

###### `options.isRevealed`
Type: `boolean`<br>
Default: `false`

Initial state of the password. When `true`, the input's password value is automatically revealed. <br><br>

###### `options.trigger.selector`
Type: `string`<br>
Default: `.PasswordRevealer-toggle`

`class`, `id` or tag name of the element that reveals or hides the password ("trigger"). <br><br>

###### `options.trigger.eventListener`
Type: `string`<br>
Default: `click`

Event that will be attached to the trigger, in the case you are initializing a trigger.

## API
Interact with a `PasswordRevealer` instance using the methods below.

### `.init()`
It initializes, in a element with the selector provided in `options`, the trigger that reveals or hides the password.

### `.show()`
It reveals the password for the `input` provided in the instance.

### `.hide()`
It hides the password for the `input` provided in the instance.

### `.toggle()`
It reveals or hides the password for the `input` provided in the instance, depending on the current state of the `input`. <br><br>

## TODO
- [ ] Emit custom events.
- [ ] Create a default trigger in the DOM when calling `init()`.

## License
MIT
